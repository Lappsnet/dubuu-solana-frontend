use anchor_lang::prelude::*;

#[error_code]
pub enum DubuuMarketplaceError {
    #[msg("Unauthorized access")]
    Unauthorized,
    
    #[msg("Invalid Perena USD* mint address")]
    InvalidPerenaMint,
    
    #[msg("Marketplace is paused")]
    MarketplacePaused,
    
    #[msg("Asset ownership verification is required")]
    OwnershipVerificationRequired,
    
    #[msg("Asset is not ready for auction")]
    AssetNotReadyForAuction,
    
    #[msg("Asset is already in auction")]
    AssetAlreadyInAuction,
    
    #[msg("Auction has already ended")]
    AuctionEnded,
    
    #[msg("Auction has not ended yet")]
    AuctionNotEnded,
    
    #[msg("Bid amount too low")]
    BidTooLow,
    
    #[msg("Invalid auction status")]
    InvalidAuctionStatus,
    
    #[msg("Invalid asset status")]
    InvalidAssetStatus,
    
    #[msg("Invalid attestation data")]
    InvalidAttestationData,
    
    #[msg("String too long")]
    StringTooLong,
}
