"use client"

import Link from 'next/link'
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Shield, Tag, Clock, Heart, Share2, User, Star, Calendar, Gauge, MapPin, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { featuredVehicles } from "@/data/vehicles"

export default function VehicleDetailPage() {
  const params = useParams()
  const [vehicle, setVehicle] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const id = params.id as string
    const foundVehicle = featuredVehicles.find((v) => v.id === id || v.link === `/vehicles/${id}`)
    if (foundVehicle) {
      setVehicle(foundVehicle)
    }
    setLoading(false)
  }, [params.id])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-xl text-cyan-400">Loading...</div>
  }

  if (!vehicle) {
    return (
      <div className="min-h-screen flex flex-col bg-[#0b1120] items-center justify-center">
        <AlertCircle className="h-16 w-16 text-cyan-400 mb-4" />
        <h1 className="text-3xl font-bold mb-4 text-white">Vehicle Not Found</h1>
        <p className="text-[#b3c2d6] mb-8">The vehicle you are looking for does not exist or has been removed.</p>
        <Link href="/marketplace">
          <Button>Return to Marketplace</Button>
        </Link>
      </div>
    )
  }

  const images = vehicle.images && vehicle.images.length > 0 ? vehicle.images : [vehicle.image || "/placeholder.svg?height=600&width=800&query=car"]

  return (
    <div className="min-h-screen flex flex-col bg-[#0b1120]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-[#101624] border-b border-[#1a2236]">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Dubuu</span>
        </div>
        <div className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-cyan-300">Home</Link>
          <Link href="/marketplace" className="text-cyan-400 font-semibold">Marketplace</Link>
          <Link href="/how-it-works" className="hover:text-cyan-300">How It Works</Link>
          <Link href="/resources" className="hover:text-cyan-300">Resources</Link>
        </div>
        <div className="flex gap-3">
          <Link href="/dashboard" className="px-4 py-2 rounded bg-[#181f2e] text-white border border-cyan-400 hover:bg-cyan-900">Dashboard</Link>
          <button className="px-4 py-2 rounded bg-cyan-400 text-[#101624] font-bold hover:bg-cyan-300 transition">Connect Wallet</button>
        </div>
      </nav>

      {/* Vehicle Detail Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto">
          <div className="car-card mb-10">
            <div className="car-card-image-area relative" style={{ minHeight: 320 }}>
              <img
                src={images[currentImageIndex]}
                alt={vehicle.title}
                className="car-card-image"
                style={{ height: 320, objectFit: 'cover' }}
              />
              <div className="car-card-glare"></div>
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                <span className="bg-cyan-400/20 text-cyan-400 text-xs px-2 py-1 rounded-full flex items-center"><Shield className="h-3 w-3 mr-1" />{vehicle.badge || 'Verified'}</span>
                <span className="bg-purple-400/20 text-purple-400 text-xs px-2 py-1 rounded-full flex items-center">{vehicle.condition}</span>
                {vehicle.currentBid && vehicle.time && (
                  <span className="bg-blue-400/20 text-blue-400 text-xs px-2 py-1 rounded-full flex items-center"><Clock className="h-3 w-3 mr-1" />{vehicle.time}</span>
                )}
              </div>
              <div className="absolute top-4 right-4 flex gap-2 z-10">
                <button className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-cyan-400 transition-colors">
                  <Heart className="h-4 w-4" />
                </button>
                <button className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-cyan-400 transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            {/* Thumbnails (if multiple images) */}
            {images.length > 1 && (
              <div className="grid grid-cols-5 gap-2 mt-2 px-4">
                {images.map((image: string, index: number) => (
                  <button
                    key={index}
                    className={`relative aspect-[4/3] rounded-md overflow-hidden border-2 transition-all ${currentImageIndex === index ? "border-cyan-400" : "border-transparent hover:border-cyan-400/50"}`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={image}
                      alt={`${vehicle.title} - Image ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
            <div className="car-card-content">
              <div className="car-card-title text-2xl mb-2">{vehicle.title}</div>
              <div className="car-card-price text-2xl mb-2">{vehicle.price}</div>
              <div className="car-card-specs mb-2">
                <div className="car-card-spec flex items-center"><Calendar className="h-4 w-4 mr-1 text-cyan-400" />{vehicle.year}</div>
                <div className="car-card-spec flex items-center"><Gauge className="h-4 w-4 mr-1 text-cyan-400" />{vehicle.mileage} miles</div>
                <div className="car-card-spec flex items-center"><MapPin className="h-4 w-4 mr-1 text-cyan-400" />{vehicle.location}</div>
              </div>
              <div className="flex gap-4 mb-4">
                <Button className="car-card-btn">Contact Seller</Button>
                <Button className="car-card-btn">Bid Now</Button>
              </div>
              <Tabs defaultValue="details" className="mb-8">
                <TabsList className="mb-4">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="seller">Seller</TabsTrigger>
                  <TabsTrigger value="verification">Verification</TabsTrigger>
                </TabsList>
                <TabsContent value="details">
                  <div className="text-[#b3c2d6] mb-2">This is a detailed description of the vehicle, including its history, specifications, and any other relevant information.</div>
                </TabsContent>
                <TabsContent value="features">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center"><CheckCircle2 className="h-5 w-5 text-cyan-400 mr-2" />Premium Sound System</div>
                    <div className="flex items-center"><CheckCircle2 className="h-5 w-5 text-cyan-400 mr-2" />Leather Seats</div>
                    <div className="flex items-center"><CheckCircle2 className="h-5 w-5 text-cyan-400 mr-2" />Navigation</div>
                    <div className="flex items-center"><CheckCircle2 className="h-5 w-5 text-cyan-400 mr-2" />Backup Camera</div>
                  </div>
                </TabsContent>
                <TabsContent value="seller">
                  <div className="bg-[#181f2e] rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-[#101624] flex items-center justify-center mr-4">
                        <User className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <div className="font-medium text-white">John Doe</div>
                        <div className="flex items-center text-sm">
                          <div className="flex items-center text-yellow-500 mr-1">
                            <Star className="h-4 w-4 fill-current" />
                          </div>
                          <span>4.9</span>
                          <span className="mx-2">•</span>
                          <span className="text-cyan-400 flex items-center"><Shield className="h-3 w-3 mr-1" />Verified Seller</span>
                        </div>
                      </div>
                    </div>
                    <Button className="car-card-btn w-full">Contact Seller</Button>
                  </div>
                </TabsContent>
                <TabsContent value="verification">
                  <div className="bg-[#181f2e] rounded-lg p-6 text-[#b3c2d6]">
                    <div className="mb-2">Verification status: <span className="text-cyan-400 font-bold">Verified</span></div>
                    <div>VIN: 1234567890ABCDEFG</div>
                    <div>Condition: {vehicle.condition}</div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-8 bg-[#101624] border-t border-[#1a2236] text-center text-sm text-[#b3c2d6]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <span className="font-bold text-lg text-cyan-400">Dubuu</span>
            <div className="flex gap-4">
              <Link href="/marketplace" className="hover:underline">Marketplace</Link>
              <Link href="/auctions" className="hover:underline">Live Auctions</Link>
              <Link href="/sell" className="hover:underline">Sell Your Vehicle</Link>
              <Link href="/watchlist" className="hover:underline">Watchlist</Link>
            </div>
            <div className="flex gap-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <Link href="/faq" className="hover:underline">FAQ</Link>
              <Link href="/docs" className="hover:underline">Documentation</Link>
              <Link href="/blog" className="hover:underline">Blog</Link>
            </div>
            <div className="flex gap-4">
              <Link href="/about" className="hover:underline">About Us</Link>
              <Link href="/careers" className="hover:underline">Careers</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            </div>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" aria-label="Twitter" className="hover:text-cyan-400">Twitter</a>
            <a href="#" aria-label="Facebook" className="hover:text-cyan-400">Facebook</a>
            <a href="#" aria-label="Instagram" className="hover:text-cyan-400">Instagram</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-cyan-400">LinkedIn</a>
            <a href="#" aria-label="GitHub" className="hover:text-cyan-400">GitHub</a>
          </div>
        </div>
        <div className="mt-6 text-[#b3c2d6]">© {new Date().getFullYear()} Dubuu Marketplace. All rights reserved.</div>
      </footer>
    </div>
  )
}
