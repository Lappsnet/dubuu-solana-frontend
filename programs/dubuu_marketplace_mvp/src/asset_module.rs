use anchor_lang::prelude::*;
use anchor_lang::solana_program::hash;
use crate::state::*;
use crate::errors::*;

const MAX_METADATA_CID_LENGTH: usize = 100; // Adjust as needed

#[derive(Accounts)]
pub struct RegisterAssetAccounts<'info> {
    #[account(
        init,
        payer = signer,
        space = 8 + 32 + 32 + 32 + 4 + MAX_METADATA_CID_LENGTH + 1 + 1 + 33 + 1, // Adjust space calculation as needed
        seeds = [
            b"asset", 
            &hash::hash(asset_id_seed_str.as_bytes()).to_bytes()
        ],
        bump
    )]
    pub asset_account: Account<'info, AssetAccount>,
    
    #[account(mut)]
    pub signer: Signer<'info>,
    
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct AdminVerifyOwnershipAccounts<'info> {
    #[account(mut)]
    pub asset_account: Account<'info, AssetAccount>,
    
    #[account(
        seeds = [b"marketplace_config"],
        bump = marketplace_config.bump
    )]
    pub marketplace_config: Account<'info, MarketplaceConfig>,
    
    #[account(
        constraint = admin.key() == marketplace_config.admin @ DubuuMarketplaceError::Unauthorized
    )]
    pub admin: Signer<'info>,
}

#[derive(Accounts)]
pub struct UpdateAssetMetadataAccounts<'info> {
    #[account(
        mut,
        has_one = current_owner @ DubuuMarketplaceError::Unauthorized
    )]
    pub asset_account: Account<'info, AssetAccount>,
    
    pub current_owner: Signer<'info>,
}

// This is an internal context not exposed directly to users
#[derive(Accounts)]
pub struct InternalTransferOwnershipAccounts<'info> {
    #[account(mut)]
    pub asset_account: Account<'info, AssetAccount>,
}

pub fn handle_register_asset_and_submit_docs_ref(
    ctx: Context<RegisterAssetAccounts>,
    asset_id_seed_str: String,
    walrus_main_metadata_cid: String,
) -> Result<()> {
    // Validate CID length
    require!(
        walrus_main_metadata_cid.len() <= MAX_METADATA_CID_LENGTH,
        DubuuMarketplaceError::StringTooLong
    );
    
    let asset_account = &mut ctx.accounts.asset_account;
    let bump = *ctx.bumps.get("asset_account").unwrap();
    
    // Hash the asset ID seed string
    let asset_id_hash = hash::hash(asset_id_seed_str.as_bytes()).to_bytes();
    
    // Initialize asset account
    asset_account.creator = ctx.accounts.signer.key();
    asset_account.current_owner = ctx.accounts.signer.key();
    asset_account.asset_id_hash = asset_id_hash;
    asset_account.walrus_main_metadata_cid = walrus_main_metadata_cid;
    asset_account.ownership_verification_status = OwnershipStatus::PendingReview;
    asset_account.asset_listed_status = AssetListedStatus::AwaitingOwnershipVerification;
    asset_account.active_auction_key = None;
    asset_account.bump = bump;
    
    Ok(())
}

pub fn handle_admin_update_ownership_verification(
    ctx: Context<AdminVerifyOwnershipAccounts>,
    new_verification_status: OwnershipStatus,
    verification_notes_hash: Option<[u8; 32]>,
) -> Result<()> {
    let asset_account = &mut ctx.accounts.asset_account;
    
    // Update verification status
    asset_account.ownership_verification_status = new_verification_status.clone();
    
    // If verified, update asset status to ready for auction
    if new_verification_status == OwnershipStatus::Verified {
        asset_account.asset_listed_status = AssetListedStatus::ReadyForAuction;
    }
    
    // Emit event
    emit!(OwnershipVerificationUpdatedEvent {
        asset_key: asset_account.key(),
        status: new_verification_status,
        notes_hash: verification_notes_hash,
    });
    
    Ok(())
}

pub fn handle_update_asset_walrus_cid(
    ctx: Context<UpdateAssetMetadataAccounts>,
    new_walrus_main_metadata_cid: String,
) -> Result<()> {
    // Validate CID length
    require!(
        new_walrus_main_metadata_cid.len() <= MAX_METADATA_CID_LENGTH,
        DubuuMarketplaceError::StringTooLong
    );
    
    let asset_account = &mut ctx.accounts.asset_account;
    
    // Check asset is not in auction
    require!(
        asset_account.asset_listed_status != AssetListedStatus::InAuction,
        DubuuMarketplaceError::AssetAlreadyInAuction
    );
    
    // Update metadata CID
    asset_account.walrus_main_metadata_cid = new_walrus_main_metadata_cid;
    
    Ok(())
}

// Internal function called by auction module
pub fn handle_internal_transfer_ownership(
    ctx: Context<InternalTransferOwnershipAccounts>,
    new_owner: Pubkey,
) -> Result<()> {
    let asset_account = &mut ctx.accounts.asset_account;
    
    // Update ownership
    asset_account.current_owner = new_owner;
    asset_account.asset_listed_status = AssetListedStatus::Sold;
    asset_account.active_auction_key = None;
    
    // Emit event
    emit!(AssetSold {
        asset_key: asset_account.key(),
        new_owner,
        walrus_main_metadata_cid: asset_account.walrus_main_metadata_cid.clone(),
    });
    
    Ok(())
}

// Internal function to update asset status to in auction
pub fn handle_internal_update_asset_status_to_in_auction(
    ctx: Context<InternalTransferOwnershipAccounts>,
    auction_key: Pubkey,
) -> Result<()> {
    let asset_account = &mut ctx.accounts.asset_account;
    
    asset_account.asset_listed_status = AssetListedStatus::InAuction;
    asset_account.active_auction_key = Some(auction_key);
    
    Ok(())
}
