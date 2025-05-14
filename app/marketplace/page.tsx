"use client"

import Link from 'next/link'
import { Shield, Tag, Clock } from 'lucide-react'
import { PhantomConnectButton } from '@/components/phantom-connect-button'

const featuredVehicles = [
  {
    image: '/cars/tesla-model3.jpg',
    title: '2020 Tesla Model 3 Performance',
    price: '$42,500',
    year: 2020,
    mileage: '28,500',
    location: 'San Francisco, CA',
    status: 'Auction',
    badge: 'Verified',
    condition: 'Excellent',
    time: '1d 23h',
    link: '/vehicles/1',
    currentBid: true,
  },
  {
    image: '/cars/bmw-m4.jpg',
    title: '2019 BMW M4 Competition',
    price: '$56,000',
    year: 2019,
    mileage: '31,200',
    location: 'Los Angeles, CA',
    status: 'Buy Now',
    badge: 'Verified',
    condition: 'Excellent',
    link: '/vehicles/2',
    currentBid: false,
  },
  {
    image: '/cars/mustang-gt.jpg',
    title: '2018 Ford Mustang GT Premium',
    price: '$32,500',
    year: 2018,
    mileage: '45,000',
    location: 'Dallas, TX',
    status: 'Auction',
    badge: 'Verified',
    condition: 'Good',
    time: '23h 59m',
    link: '/vehicles/3',
    currentBid: true,
  },
  {
    image: '/cars/porsche-911.jpg',
    title: '2021 Porsche 911 Carrera S',
    price: '$129,000',
    year: 2021,
    mileage: '12,000',
    location: 'Miami, FL',
    status: 'Buy Now',
    badge: 'Verified',
    condition: 'Like New',
    link: '/vehicles/4',
    currentBid: false,
  },
  {
    image: '/cars/corvette-z06.jpg',
    title: '2017 Chevrolet Corvette Z06',
    price: '$68,500',
    year: 2017,
    mileage: '28,000',
    location: 'Chicago, IL',
    status: 'Auction',
    badge: 'Verified',
    condition: 'Excellent',
    time: '2d 23h',
    link: '/vehicles/5',
    currentBid: true,
  },
  {
    image: '/cars/audi-rs7.jpg',
    title: '2020 Audi RS7 Sportback',
    price: '$98,000',
    year: 2020,
    mileage: '18,500',
    location: 'Seattle, WA',
    status: 'Buy Now',
    badge: 'Verified',
    condition: 'Excellent',
    link: '/vehicles/6',
    currentBid: false,
  },
]

export default function MarketplacePage() {
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
          <span className="text-cyan-400 font-semibold text-lg">{featuredVehicles.length} Results</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredVehicles.map((car, i) => (
            <div className="car-card shadow-xl hover:shadow-cyan-400/20 transition-shadow duration-300" key={car.title}>
              <div className="car-card-image-area relative">
                <img src={car.image} alt={car.title} className="car-card-image" />
                <div className="car-card-glare"></div>
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  <span className="bg-cyan-400/20 text-cyan-400 text-xs px-2 py-1 rounded-full flex items-center font-semibold">{car.badge}</span>
                  <span className="bg-purple-400/20 text-purple-400 text-xs px-2 py-1 rounded-full flex items-center font-semibold">{car.condition}</span>
                  {car.currentBid && car.time && (
                    <span className="bg-blue-400/20 text-blue-400 text-xs px-2 py-1 rounded-full flex items-center font-semibold">{car.time}</span>
                  )}
                </div>
              </div>
              <div className="car-card-content">
                <div className="car-card-title text-2xl font-bold text-white mb-2">{car.title}</div>
                <div className="car-card-price text-2xl font-bold text-cyan-400 mb-4">{car.price}</div>
                <div className="car-card-specs text-[#b3c2d6] mb-4">
                  <div className="car-card-spec font-medium">{car.year}</div>
                  <div className="car-card-spec font-medium">{car.mileage} miles</div>
                  <div className="car-card-spec font-medium">{car.location}</div>
                </div>
                <div className="flex gap-2 mb-2">
                  {car.status === 'Auction' && (
                    <span className="bg-purple-400/20 text-purple-400 text-xs px-2 py-1 rounded-full flex items-center font-semibold">Auction</span>
                  )}
                  {car.status === 'Buy Now' && (
                    <span className="bg-cyan-400/20 text-cyan-400 text-xs px-2 py-1 rounded-full flex items-center font-semibold">Buy Now</span>
                  )}
                </div>
                <Link href={car.link}>
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
