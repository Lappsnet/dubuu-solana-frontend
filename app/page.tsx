"use client"

import Link from 'next/link'
import { useEffect } from 'react'
import { Shield, Tag, Clock, CheckCircle2 } from 'lucide-react'
import { PhantomConnectButton } from '@/components/phantom-connect-button'
import { featuredVehicles } from '@/data/vehicles'

export default function Home() {
  useEffect(() => {
    // Animate cards on load
    const cards = document.querySelectorAll('.car-card');
    cards.forEach((card, i) => {
      card.animate([
        { opacity: 0, transform: 'translateY(40px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], {
        duration: 600,
        delay: i * 120,
        fill: 'forwards',
        easing: 'cubic-bezier(.4,0,.2,1)'
      });
    });
  }, []);

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
          <Link href="/" className="text-cyan-400 font-semibold">Home</Link>
          <Link href="/marketplace" className="hover:text-cyan-300">Marketplace</Link>
          <Link href="/how-it-works" className="hover:text-cyan-300">How It Works</Link>
          <a href="https://github.com/Lappsnet/dubuu" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">Resources</a>
        </div>
        <div className="flex gap-3">
          <Link href="/dashboard" className="px-4 py-2 rounded bg-[#181f2e] text-white border border-cyan-400 hover:bg-cyan-900">Dashboard</Link>
          <PhantomConnectButton />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 py-16 px-4 bg-gradient-to-b from-[#101624] to-[#0b1120]">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          The Future of <span className="text-cyan-400">Vehicle Marketplace</span> is Here
        </h1>
        <p className="text-lg md:text-2xl text-[#b3c2d6] text-center max-w-2xl mb-8">
          Buy, sell, and auction vehicles with complete transparency and security on the blockchain. Verified ownership, detailed condition reports, and seamless transactions.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <Link href="/marketplace">
            <button className="px-8 py-3 rounded-lg bg-cyan-400 text-[#101624] font-bold text-lg shadow-lg hover:bg-cyan-300 transition">Explore Marketplace</button>
          </Link>
          <Link href="/sell">
            <button className="px-8 py-3 rounded-lg border border-cyan-400 text-cyan-400 font-bold text-lg shadow-lg hover:bg-cyan-900 hover:text-white transition">Sell Your Vehicle</button>
          </Link>
        </div>
        {/* Stats */}
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="bg-[#181f2e] rounded-xl px-8 py-6 text-center shadow-lg border border-[#1a2236]">
            <div className="text-3xl font-bold text-cyan-400 mb-1">1,200+</div>
            <div className="text-[#b3c2d6] text-lg">Vehicles Listed</div>
          </div>
          <div className="bg-[#181f2e] rounded-xl px-8 py-6 text-center shadow-lg border border-[#1a2236]">
            <div className="text-3xl font-bold text-cyan-400 mb-1">$15M+</div>
            <div className="text-[#b3c2d6] text-lg">Transaction Volume</div>
          </div>
          <div className="bg-[#181f2e] rounded-xl px-8 py-6 text-center shadow-lg border border-[#1a2236]">
            <div className="text-3xl font-bold text-cyan-400 mb-1">5,000+</div>
            <div className="text-[#b3c2d6] text-lg">Happy Users</div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Vehicles</h2>
          <Link href="/marketplace" className="text-cyan-400 font-semibold hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredVehicles.map((car, i) => (
            <div className="car-card" key={car.id} style={{ opacity: 0 }}>
              <div className="car-card-image-area relative">
                <img src={car.imageUrl} alt={car.title} className="car-card-image" />
                <div className="car-card-glare"></div>
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  {car.isVerified && (
                    <span className="bg-cyan-400/20 text-cyan-400 text-xs px-2 py-1 rounded-full flex items-center">
                      <Shield className="h-3 w-3 mr-1" />Verified
                    </span>
                  )}
                  {car.condition && (
                    <span className="bg-purple-400/20 text-purple-400 text-xs px-2 py-1 rounded-full flex items-center">
                      {car.condition}
                    </span>
                  )}
                  {car.isAuction && car.auctionEndsAt && (
                    <span className="bg-blue-400/20 text-blue-400 text-xs px-2 py-1 rounded-full flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {new Date(car.auctionEndsAt).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
              <div className="car-card-content">
                <div className="car-card-title">{car.title}</div>
                <div className="car-card-price">${car.price.toLocaleString()}</div>
                <div className="car-card-specs">
                  <div className="car-card-spec">{car.year}</div>
                  <div className="car-card-spec">{car.mileage.toLocaleString()} miles</div>
                  <div className="car-card-spec">{car.location}</div>
                </div>
                <div className="flex gap-2 mb-2">
                  {car.isAuction ? (
                    <span className="bg-purple-400/20 text-purple-400 text-xs px-2 py-1 rounded-full flex items-center">
                      <Tag className="h-3 w-3 mr-1" />Auction
                    </span>
                  ) : (
                    <span className="bg-cyan-400/20 text-cyan-400 text-xs px-2 py-1 rounded-full flex items-center">
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
        <div className="flex justify-center mt-10">
          <Link href="/marketplace">
            <button className="px-8 py-3 rounded-lg bg-cyan-400 text-[#101624] font-bold text-lg shadow-lg hover:bg-cyan-300 transition">Browse All Vehicles</button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">How Dubuu Marketplace Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-[#181f2e] rounded-xl p-8 text-center shadow-lg border border-[#1a2236]">
            <Shield className="mx-auto h-10 w-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Verified Ownership</h3>
            <p className="text-[#b3c2d6]">All vehicles undergo a thorough ownership verification process, ensuring you're buying from legitimate sellers.</p>
          </div>
          <div className="bg-[#181f2e] rounded-xl p-8 text-center shadow-lg border border-[#1a2236]">
            <Tag className="mx-auto h-10 w-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Transparent Auctions</h3>
            <p className="text-[#b3c2d6]">Our blockchain-based auction system provides complete transparency with all bids recorded immutably.</p>
          </div>
          <div className="bg-[#181f2e] rounded-xl p-8 text-center shadow-lg border border-[#1a2236]">
            <CheckCircle2 className="mx-auto h-10 w-10 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-[#b3c2d6]">All transactions are conducted using USDC, providing security, speed, and low fees for both buyers and sellers.</p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/how-it-works">
            <button className="px-8 py-3 rounded-lg border border-cyan-400 text-cyan-400 font-bold text-lg shadow-lg hover:bg-cyan-900 hover:text-white transition">Learn More About Our Process</button>
          </Link>
        </div>
      </section>

      {/* Why Choose Dubuu Marketplace */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Why Choose Dubuu Marketplace</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-[#181f2e] rounded-xl p-8 text-center shadow-lg border border-[#1a2236]">
            <h3 className="text-xl font-semibold mb-2">Detailed Vehicle Information</h3>
            <p className="text-[#b3c2d6]">Access comprehensive vehicle details, condition reports, and ownership history before making a purchase decision.</p>
          </div>
          <div className="bg-[#181f2e] rounded-xl p-8 text-center shadow-lg border border-[#1a2236]">
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-[#b3c2d6]">Every vehicle listed undergoes a thorough inspection and verification process to ensure quality and authenticity.</p>
          </div>
          <div className="bg-[#181f2e] rounded-xl p-8 text-center shadow-lg border border-[#1a2236]">
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-[#b3c2d6]">Our dedicated support team is available around the clock to assist you with any questions or concerns.</p>
          </div>
        </div>
      </section>
    </div>
  )
} 