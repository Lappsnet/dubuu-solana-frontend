export interface Vehicle {
  id: string
  title: string
  year: number
  make: string
  model: string
  price: number
  imageUrl?: string
  mileage: number
  location: string
  isAuction: boolean
  isVerified: boolean
  auctionEndsAt?: string
  condition?: "New" | "Like New" | "Excellent" | "Good" | "Fair" | "Salvage"
  description?: string
  features?: string[]
  seller?: {
    id: string
    name: string
    rating: number
    verified: boolean
  }
}
