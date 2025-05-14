use anchor_lang::prelude::*;
use anchor_spl::token::{self, Token, TokenAccount, Mint, Transfer, CloseAccount};
use crate::state::*;
use crate::errors::*;
use crate::asset_module;

#[derive(Accounts)]
pub struct InitializeWormholeListenerAccounts<'info> {
    #[account(
        init,
        payer = signer,
        space = 8 + 32 + 1, // Adjust space calculation as needed
        seeds = [b"wormhole_listener"],
        bump
    )]
    pub wormhole_listener_config: Account<'info, WormholeListenerConfig>,
    
    #[account(mut)]
    pub signer: Signer<'info>,
    
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ListAssetForAuctionAccounts<'info> {
    #[account(
        init,
        payer = seller,
        space = 8 + 32 + 32 + 32 + 8 + 8 + 8 + 33 + 1 + 1 + 1, // Adjust space calculation as needed
        seeds = [b"auction", asset_account.key().as_ref()],
        bump
    )]
    pub auction_account: Account<'info, AuctionAccount>,
    
    #[account(
        mut,
        constraint = asset_account.current_owner == seller.key() @ DubuuMarketplaceError::Unauthorized,
        constraint = asset_account.ownership_verification_status == OwnershipStatus::Verified @ DubuuMarketplaceError::OwnershipVerificationRequired,
        constraint = asset_account.asset_listed_status == AssetListedStatus::ReadyForAuction @ DubuuMarketplaceError::AssetNotReadyForAuction
    )]
    pub asset_account: Account<'info, AssetAccount>,
    
    #[account(mut)]
    pub seller: Signer<'info>,
    
    #[account(
        seeds = [b"marketplace_config"],
        bump = marketplace_config.bump,
        constraint = !marketplace_config.is_paused @ DubuuMarketplaceError::MarketplacePaused
    )]
    pub marketplace_config: Account<'info, MarketplaceConfig>,
    
    #[account(
        mut,
        constraint = seller_pern_token_account.mint == marketplace_config.pern_usd_star_mint @ DubuuMarketplaceError::InvalidPerenaMint,
        constraint = seller_pern_token_account.owner == seller.key()
    )]
    pub seller_pern_token_account: Account<'info, TokenAccount>,
    
    #[account(
        mut,
        constraint = treasury_pern_token_account.key() == marketplace_config.treasury_pern_account
    )]
    pub treasury_pern_token_account: Account<'info, TokenAccount>,
    
    #[account(
        init,
        payer = seller,
        token::mint = pern_usd_star_mint_account,
        token::authority = auction_escrow_authority,
        seeds = [b"escrow", auction_account.key().as_ref()],
        bump
    )]
    pub auction_escrow_token_account: Account<'info, TokenAccount>,
    
    #[account(
        address = marketplace_config.pern_usd_star_mint
    )]
    pub pern_usd_star_mint_account: Account<'info, Mint>,
    
    /// CHECK: This is a PDA that will be the authority for the escrow account
    #[account(
        seeds = [b"escrow_authority", auction_account.key().as_ref()],
        bump
    )]
    pub auction_escrow_authority: AccountInfo<'info>,
    
    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct PlaceBidAccounts<'info> {
    #[account(
        mut,
        seeds = [b"auction", auction_account.asset_key.as_ref()],
        bump = auction_account.bump,
        constraint = auction_account.auction_status == AuctionProcessStatus::Active @ DubuuMarketplaceError::InvalidAuctionStatus
    )]
    pub auction_account: Account<'info, AuctionAccount>,
    
    #[account(mut)]
    pub bidder: Signer<'info>,
    
    #[account(
        mut,
        constraint = bidder_pern_token_account.mint == auction_account.pern_usd_star_mint @ DubuuMarketplaceError::InvalidPerenaMint,
        constraint = bidder_pern_token_account.owner == bidder.key()
    )]
    pub bidder_pern_token_account: Account<'info, TokenAccount>,
    
    #[account(
        mut,
        seeds = [b"escrow", auction_account.key().as_ref()],
        bump
    )]
    pub auction_escrow_token_account: Account<'info, TokenAccount>,
    
    /// CHECK: This is a PDA that is the authority for the escrow account
    #[account(
        seeds = [b"escrow_authority", auction_account.key().as_ref()],
        bump = auction_account.escrow_authority_bump
    )]
    pub auction_escrow_authority: AccountInfo<'info>,
    
    // Optional account for returning funds to previous highest bidder
    #[account(
        mut,
        constraint = 
            auction_account.highest_bidder.is_none() || 
            (previous_highest_bidder_token_account.owner == auction_account.highest_bidder.unwrap() &&
             previous_highest_bidder_token_account.mint == auction_account.pern_usd_star_mint)
    )]
    pub previous_highest_bidder_token_account: Option<Account<'info, TokenAccount>>,
    
    pub token_program: Program<'info, Token>,
}

#[derive(Accounts)]
pub struct FinalizeAuctionAccounts<'info> {
    #[account(
        mut,
        seeds = [b"auction", auction_account.asset_key.as_ref()],
        bump = auction_account.bump,
        constraint = auction_account.auction_status == AuctionProcessStatus::Active @ DubuuMarketplaceError::InvalidAuctionStatus
    )]
    pub auction_account: Account<'info, AuctionAccount>,
    
    // For hackathon, we'll allow any signer to finalize the auction
    // In production, this would be restricted to a Chainlink oracle or authorized caller
    pub signer: Signer<'info>,
    
    // Optional account for returning funds if auction ends with no sale
    #[account(
        mut,
        seeds = [b"escrow", auction_account.key().as_ref()],
        bump
    )]
    pub auction_escrow_token_account: Option<Account<'info, TokenAccount>>,
    
    /// CHECK: This is a PDA that is the authority for the escrow account
    #[account(
        seeds = [b"escrow_authority", auction_account.key().as_ref()],
        bump = auction_account.escrow_authority_bump
    )]
    pub auction_escrow_authority: Option<AccountInfo<'info>>,
    
    #[account(
        mut,
        constraint = 
            auction_account.highest_bidder.is_none() || 
            (highest_bidder_token_account.owner == auction_account.highest_bidder.unwrap() &&
             highest_bidder_token_account.mint == auction_account.pern_usd_star_mint)
    )]
    pub highest_bidder_token_account: Option<Account<'info, TokenAccount>>,
    
    pub token_program: Program<'info, Token>,
}

#[derive(Accounts)]
pub struct SettleAuctionAccounts<'info> {
    #[account(
        mut,
        seeds = [b"auction", auction_account.asset_key.as_ref()],
        bump = auction_account.bump,
        constraint = auction_account.auction_status == AuctionProcessStatus::EndedSoldPayPending @ DubuuMarketplaceError::InvalidAuctionStatus,
        constraint = auction_account.highest_bidder.is_some() && auction_account.highest_bidder.unwrap() == highest_bidder.key() @ DubuuMarketplaceError::Unauthorized
    )]
    pub auction_account: Account<'info, AuctionAccount>,
    
    #[account(mut)]
    pub highest_bidder: Signer<'info>,
    
    #[account(
        mut,
        constraint = asset_account.key() == auction_account.asset_key
    )]
    pub asset_account: Account<'info, AssetAccount>,
    
    #[account(
        seeds = [b"marketplace_config"],
        bump = marketplace_config.bump
    )]
    pub marketplace_config: Account<'info, MarketplaceConfig>,
    
    #[account(
        mut,
        seeds = [b"escrow", auction_account.key().as_ref()],
        bump
    )]
    pub auction_escrow_token_account: Account<'info, TokenAccount>,
    
    /// CHECK: This is a PDA that is the authority for the escrow account
    #[account(
        seeds = [b"escrow_authority", auction_account.key().as_ref()],
        bump = auction_account.escrow_authority_bump
    )]
    pub auction_escrow_authority: AccountInfo<'info>,
    
    #[account(
        mut,
        constraint = seller_token_account.owner == auction_account.seller
    )]
    pub seller_token_account: Account<'info, TokenAccount>,
    
    #[account(
        mut,
        address = marketplace_config.treasury_pern_account
    )]
    pub treasury_pern_token_account: Account<'info, TokenAccount>,
    
    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ProcessWormholeAttestationAccounts<'info> {
    #[account(
        init_if_needed,
        payer = relayer,
        space = 8 + 32 + 2 + 32 + 8 + 8 + 1, // Adjust space calculation as needed
        seeds = [
            b"attestation", 
            payload.solana_target_address.as_ref(), 
            &payload.evm_chain_id.to_le_bytes(),
            &hash::hash(&payload.asset_address_on_evm).to_bytes()
        ],
        bump
    )]
    pub cross_chain_attestation: Account<'info, CrossChainAttestation>,
    
    #[account(
        seeds = [b"wormhole_listener"],
        bump = wormhole_listener_config.bump,
        constraint = relayer.key() == wormhole_listener_config.wormhole_authorized_relayer @ DubuuMarketplaceError::Unauthorized
    )]
    pub wormhole_listener_config: Account<'info, WormholeListenerConfig>,
    
    #[account(mut)]
    pub relayer: Signer<'info>,
    
    pub system_program: Program<'info, System>,
}

pub fn handle_initialize_wormhole_listener(
    ctx: Context<InitializeWormholeListenerAccounts>,
    authorized_relayer: Pubkey,
) -> Result<()> {
    let wormhole_listener_config = &mut ctx.accounts.wormhole_listener_config;
    let bump = *ctx.bumps.get("wormhole_listener_config").unwrap();
    
    wormhole_listener_config.wormhole_authorized_relayer = authorized_relayer;
    wormhole_listener_config.bump = bump;
    
    Ok(())
}

pub fn handle_list_asset_for_auction(
    ctx: Context<ListAssetForAuctionAccounts>,
    start_price_usd_star: u64,
    duration_seconds: i64,
) -> Result<()> {
    let auction_account = &mut ctx.accounts.auction_account;
    let marketplace_config = &ctx.accounts.marketplace_config;
    let auction_bump = *ctx.bumps.get("auction_account").unwrap();
    let escrow_authority_bump = *ctx.bumps.get("auction_escrow_authority").unwrap();
    
    // Transfer listing fee from seller to treasury
    let cpi_accounts = Transfer {
        from: ctx.accounts.seller_pern_token_account.to_account_info(),
        to: ctx.accounts.treasury_pern_token_account.to_account_info(),
        authority: ctx.accounts.seller.to_account_info(),
    };
    
    let cpi_ctx = CpiContext::new(
        ctx.accounts.token_program.to_account_info(),
        cpi_accounts,
    );
    
    token::transfer(cpi_ctx, marketplace_config.listing_fee_usd_star)?;
    
    // Calculate auction end timestamp
    let clock = Clock::get()?;
    let auction_end_timestamp = clock.unix_timestamp + duration_seconds;
    
    // Initialize auction account
    auction_account.asset_key = ctx.accounts.asset_account.key();
    auction_account.seller = ctx.accounts.seller.key();
    auction_account.pern_usd_star_mint = marketplace_config.pern_usd_star_mint;
    auction_account.start_price_usd_star = start_price_usd_star;
    auction_account.auction_end_timestamp = auction_end_timestamp;
    auction_account.highest_bid_usd_star = start_price_usd_star;
    auction_account.highest_bidder = None;
    auction_account.auction_status = AuctionProcessStatus::Active;
    auction_account.escrow_authority_bump = escrow_authority_bump;
    auction_account.bump = auction_bump;
    
    // Update asset status to in auction
    let asset_ctx = Context::new(
        ctx.program_id,
        &mut InternalTransferOwnershipAccounts {
            asset_account: ctx.accounts.asset_account.clone(),
        },
        &[],
        ctx.remaining_accounts,
    );
    
    asset_module::handle_internal_update_asset_status_to_in_auction(asset_ctx, auction_account.key())?;
    
    Ok(())
}

pub fn handle_place_bid(
    ctx: Context<PlaceBidAccounts>,
    bid_amount_usd_star: u64,
) -> Result<()> {
    let auction_account = &mut ctx.accounts.auction_account;
    
    // Check bid amount is higher than current highest bid
    require!(
        bid_amount_usd_star > auction_account.highest_bid_usd_star,
        DubuuMarketplaceError::BidTooLow
    );
    
    // Check auction hasn't ended
    let clock = Clock::get()?;
    require!(
        clock.unix_timestamp < auction_account.auction_end_timestamp,
        DubuuMarketplaceError::AuctionEnded
    );
    
    // If there's a previous highest bidder, return their funds
    if auction_account.highest_bidder.is_some() {
        let previous_bidder_token_account = ctx.accounts.previous_highest_bidder_token_account.as_ref()
            .ok_or(DubuuMarketplaceError::InvalidAuctionStatus)?;
        
        let seeds = &[
            b"escrow_authority",
            auction_account.key().as_ref(),
            &[auction_account.escrow_authority_bump],
        ];
        let signer = &[&seeds[..]];
        
        let cpi_accounts = Transfer {
            from: ctx.accounts.auction_escrow_token_account.to_account_info(),
            to: previous_bidder_token_account.to_account_info(),
            authority: ctx.accounts.auction_escrow_authority.to_account_info(),
        };
        
        let cpi_ctx = CpiContext::new_with_signer(
            ctx.accounts.token_program.to_account_info(),
            cpi_accounts,
            signer,
        );
        
        token::transfer(cpi_ctx, auction_account.highest_bid_usd_star)?;
    }
    
    // Transfer new bid to escrow
    let cpi_accounts = Transfer {
        from: ctx.accounts.bidder_pern_token_account.to_account_info(),
        to: ctx.accounts.auction_escrow_token_account.to_account_info(),
        authority: ctx.accounts.bidder.to_account_info(),
    };
    
    let cpi_ctx = CpiContext::new(
        ctx.accounts.token_program.to_account_info(),
        cpi_accounts,
    );
    
    token::transfer(cpi_ctx, bid_amount_usd_star)?;
    
    // Update auction account
    auction_account.highest_bidder = Some(ctx.accounts.bidder.key());
    auction_account.highest_bid_usd_star = bid_amount_usd_star;
    
    // Emit event
    emit!(BidPlacedEvent {
        auction_key: auction_account.key(),
        bidder: ctx.accounts.bidder.key(),
        amount: bid_amount_usd_star,
    });
    
    Ok(())
}

pub fn handle_finalize_auction(
    ctx: Context<FinalizeAuctionAccounts>,
) -> Result<()> {
    let auction_account = &mut ctx.accounts.auction_account;
    
    // Check auction has ended
    let clock = Clock::get()?;
    require!(
        clock.unix_timestamp >= auction_account.auction_end_timestamp,
        DubuuMarketplaceError::AuctionNotEnded
    );
    
    // Determine auction outcome
    if auction_account.highest_bidder.is_some() {
        // Auction ended with a winner
        auction_account.auction_status = AuctionProcessStatus::EndedSoldPayPending;
        
        // Emit event
        emit!(AuctionEndedWinner {
            auction_key: auction_account.key(),
            winner: auction_account.highest_bidder.unwrap(),
            winning_bid: auction_account.highest_bid_usd_star,
        });
    } else {
        // Auction ended with no sale
        auction_account.auction_status = AuctionProcessStatus::EndedUnsold;
        
        // Emit event
        emit!(AuctionEndedNoSale {
            auction_key: auction_account.key(),
        });
    }
    
    Ok(())
}

pub fn handle_settle_auction_and_transfer(
    ctx: Context<SettleAuctionAccounts>,
) -> Result<()> {
    let auction_account = &mut ctx.accounts.auction_account;
    let marketplace_config = &ctx.accounts.marketplace_config;
    
    // Calculate commission
    let commission = auction_account.highest_bid_usd_star
        .checked_mul(marketplace_config.sale_commission_bps as u64)
        .unwrap()
        .checked_div(10000)
        .unwrap();
    
    // Calculate amount to seller
    let amount_to_seller = auction_account.highest_bid_usd_star
        .checked_sub(commission)
        .unwrap();
    
    // Create signer seeds for escrow authority
    let seeds = &[
        b"escrow_authority",
        auction_account.key().as_ref(),
        &[auction_account.escrow_authority_bump],
    ];
    let signer = &[&seeds[..]];
    
    // Transfer funds to seller
    let cpi_accounts = Transfer {
        from: ctx.accounts.auction_escrow_token_account.to_account_info(),
        to: ctx.accounts.seller_token_account.to_account_info(),
        authority: ctx.accounts.auction_escrow_authority.to_account_info(),
    };
    
    let cpi_ctx = CpiContext::new_with_signer(
        ctx.accounts.token_program.to_account_info(),
        cpi_accounts,
        signer,
    );
    
    token::transfer(cpi_ctx, amount_to_seller)?;
    
    // Transfer commission to treasury
    let cpi_accounts = Transfer {
        from: ctx.accounts.auction_escrow_token_account.to_account_info(),
        to: ctx.accounts.treasury_pern_token_account.to_account_info(),
        authority: ctx.accounts.auction_escrow_authority.to_account_info(),
    };
    
    let cpi_ctx = CpiContext::new_with_signer(
        ctx.accounts.token_program.to_account_info(),
        cpi_accounts,
        signer,
    );
    
    token::transfer(cpi_ctx, commission)?;
    
    // Close escrow token account
    let cpi_accounts = CloseAccount {
        account: ctx.accounts.auction_escrow_token_account.to_account_info(),
        destination: ctx.accounts.highest_bidder.to_account_info(),
        authority: ctx.accounts.auction_escrow_authority.to_account_info(),
    };
    
    let cpi_ctx = CpiContext::new_with_signer(
        ctx.accounts.token_program.to_account_info(),
        cpi_accounts,
        signer,
    );
    
    token::close_account(cpi_ctx)?;
    
    // Transfer asset ownership
    let asset_ctx = Context::new(
        ctx.program_id,
        &mut InternalTransferOwnershipAccounts {
            asset_account: ctx.accounts.asset_account.clone(),
        },
        &[],
        ctx.remaining_accounts,
    );
    
    asset_module::handle_internal_transfer_ownership(asset_ctx, ctx.accounts.highest_bidder.key())?;
    
    // Update auction status
    auction_account.auction_status = AuctionProcessStatus::Completed;
    
    Ok(())
}

pub fn handle_process_wormhole_balance_attestation(
    ctx: Context<ProcessWormholeAttestationAccounts>,
    payload: BalanceAttestationPayload,
) -> Result<()> {
    let cross_chain_attestation = &mut ctx.accounts.cross_chain_attestation;
    let bump = *ctx.bumps.get("cross_chain_attestation").unwrap();
    
    // Initialize or update attestation
    cross_chain_attestation.user_solana_key = payload.solana_target_address;
    cross_chain_attestation.source_chain_id = payload.evm_chain_id;
    cross_chain_attestation.source_asset_hash = hash::hash(&payload.asset_address_on_evm.to_vec()).to_bytes();
    cross_chain_attestation.attested_balance = payload.balance;
    cross_chain_attestation.attestation_timestamp = payload.timestamp;
    cross_chain_attestation.bump = bump;
    
    // Emit event
    emit!(CrossChainBalanceAttestedEvent {
        user_solana_key: payload.solana_target_address,
        source_chain_id: payload.evm_chain_id,
        source_asset_hash: cross_chain_attestation.source_asset_hash,
        attested_balance: payload.balance,
    });
    
    Ok(())
}
