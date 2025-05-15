"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Shield, Tag, Clock, Search, SlidersHorizontal, ChevronDown } from 'lucide-react'
import { PhantomConnectButton } from '@/components/phantom-connect-button'
import { featuredVehicles } from '@/data/vehicles'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 200000])
  const [selectedMakes, setSelectedMakes] = useState<string[]>([])
  const [selectedConditions, setSelectedConditions] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [filteredVehicles, setFilteredVehicles] = useState(featuredVehicles)

  // Get unique makes and conditions
  const makes = Array.from(new Set(featuredVehicles.map(car => car.make)))
  const conditions = Array.from(new Set(featuredVehicles.map(car => car.condition)))

  useEffect(() => {
    let filtered = featuredVehicles

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(car => 
        car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.model.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Apply price range filter
    filtered = filtered.filter(car => 
      car.price >= priceRange[0] && car.price <= priceRange[1]
    )

    // Apply make filter
    if (selectedMakes.length > 0) {
      filtered = filtered.filter(car => selectedMakes.includes(car.make))
    }

    // Apply condition filter
    if (selectedConditions.length > 0) {
      filtered = filtered.filter(car => selectedConditions.includes(car.condition))
    }

    setFilteredVehicles(filtered)
  }, [searchQuery, priceRange, selectedMakes, selectedConditions])

  const handleMakeToggle = (make: string) => {
    setSelectedMakes(prev => 
      prev.includes(make) 
        ? prev.filter(m => m !== make)
        : [...prev, make]
    )
  }

  const handleConditionToggle = (condition: string) => {
    setSelectedConditions(prev => 
      prev.includes(condition) 
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#101624] to-[#0b1120]">
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
          <a href="https://github.com/Lappsnet/dubuu" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">Resources</a>
        </div>
        <div className="flex gap-3">
          <Link href="/dashboard" className="px-4 py-2 rounded bg-[#181f2e] text-white border border-cyan-400 hover:bg-cyan-900">Dashboard</Link>
          <PhantomConnectButton />
        </div>
      </nav>

      {/* Marketplace Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Browse Vehicles</h1>
          <span className="text-cyan-400 font-semibold text-lg">{filteredVehicles.length} Results</span>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#b3c2d6]" />
              <Input
                type="search"
                placeholder="Search by make, model, or title..."
                className="pl-9 bg-[#181f2e] border-[#1a2236] text-[#b3c2d6] placeholder:text-[#b3c2d6]/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              className="bg-[#181f2e] border-[#1a2236] text-[#b3c2d6] hover:bg-cyan-400/10 hover:text-cyan-400"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
              <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </Button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="bg-[#181f2e] rounded-xl p-6 border border-[#1a2236] space-y-6">
              {/* Price Range */}
              <div>
                <h3 className="text-white font-semibold mb-4">Price Range (USDC)</h3>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={200000}
                    step={1000}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-[#b3c2d6]">
                    <span>{priceRange[0].toLocaleString()} USDC</span>
                    <span>{priceRange[1].toLocaleString()} USDC</span>
                  </div>
                </div>
              </div>

              {/* Makes */}
              <div>
                <h3 className="text-white font-semibold mb-4">Makes</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {makes.map((make) => (
                    <div key={make} className="flex items-center space-x-2">
                      <Checkbox
                        id={make}
                        checked={selectedMakes.includes(make)}
                        onCheckedChange={() => handleMakeToggle(make)}
                      />
                      <label
                        htmlFor={make}
                        className="text-sm text-[#b3c2d6] cursor-pointer"
                      >
                        {make}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conditions */}
              <div>
                <h3 className="text-white font-semibold mb-4">Conditions</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {conditions.map((condition) => (
                    <div key={condition} className="flex items-center space-x-2">
                      <Checkbox
                        id={condition}
                        checked={selectedConditions.includes(condition)}
                        onCheckedChange={() => handleConditionToggle(condition)}
                      />
                      <label
                        htmlFor={condition}
                        className="text-sm text-[#b3c2d6] cursor-pointer"
                      >
                        {condition}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredVehicles.map((car) => (
            <div className="car-card shadow-xl hover:shadow-cyan-400/20 transition-shadow duration-300" key={car.id}>
              <div className="car-card-image-area relative">
                <img src={car.imageUrl} alt={car.title} className="car-card-image" />
                <div className="car-card-glare"></div>
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  {car.isVerified && (
                    <span className="bg-cyan-400/20 text-cyan-400 text-xs px-2 py-1 rounded-full flex items-center font-semibold">
                      <Shield className="h-3 w-3 mr-1" />Verified
                    </span>
                  )}
                  {car.condition && (
                    <span className="bg-purple-400/20 text-purple-400 text-xs px-2 py-1 rounded-full flex items-center font-semibold">
                      {car.condition}
                    </span>
                  )}
                  {car.isAuction && car.auctionEndsAt && (
                    <span className="bg-blue-400/20 text-blue-400 text-xs px-2 py-1 rounded-full flex items-center font-semibold">
                      <Clock className="h-3 w-3 mr-1" />
                      {new Date(car.auctionEndsAt).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
              <div className="car-card-content">
                <div className="car-card-title text-2xl font-bold text-white mb-2">{car.title}</div>
                <div className="car-card-price text-2xl font-bold text-cyan-400 mb-4">{car.price.toLocaleString()} USDC</div>
                <div className="car-card-specs text-[#b3c2d6] mb-4">
                  <div className="car-card-spec font-medium">{car.year}</div>
                  <div className="car-card-spec font-medium">{car.mileage.toLocaleString()} miles</div>
                  <div className="car-card-spec font-medium">{car.location}</div>
                </div>
                <div className="flex gap-2 mb-2">
                  {car.isAuction ? (
                    <span className="bg-purple-400/20 text-purple-400 text-xs px-2 py-1 rounded-full flex items-center font-semibold">
                      <Tag className="h-3 w-3 mr-1" />Auction
                    </span>
                  ) : (
                    <span className="bg-cyan-400/20 text-cyan-400 text-xs px-2 py-1 rounded-full flex items-center font-semibold">
                      Buy Now
                    </span>
                  )}
                </div>
                <Link href={`/vehicles/${car.id}`}>
                  <button className="car-card-btn w-full mt-2">View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#b3c2d6] text-lg">No vehicles found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4 bg-[#181f2e] border-[#1a2236] text-[#b3c2d6] hover:bg-cyan-400/10 hover:text-cyan-400"
              onClick={() => {
                setSearchQuery("")
                setPriceRange([0, 200000])
                setSelectedMakes([])
                setSelectedConditions([])
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </section>
    </div>
  )
}
