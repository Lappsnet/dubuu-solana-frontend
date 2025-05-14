"use client"

import Link from 'next/link'
import { useEffect } from 'react'
import { Shield, Tag, Clock, CheckCircle2 } from 'lucide-react'
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
            <div className="car-card" key={car.title} style={{ opacity: 0 }}>
              <div className="car-card-image-area relative">
                <img src={car.image} alt={car.title} className="car-card-image" />
                <div className="car-card-glare"></div>
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  <span className="bg-cyan-400/20 text-cyan-400 text-xs px-2 py-1 rounded-full flex items-center"><Shield className="h-3 w-3 mr-1" />{car.badge}</span>
                  <span className="bg-purple-400/20 text-purple-400 text-xs px-2 py-1 rounded-full flex items-center">{car.condition}</span>
                  {car.currentBid && car.time && (
                    <span className="bg-blue-400/20 text-blue-400 text-xs px-2 py-1 rounded-full flex items-center"><Clock className="h-3 w-3 mr-1" />{car.time}</span>
                  )}
                </div>
              </div>
              <div className="car-card-content">
                <div className="car-card-title">{car.title}</div>
                <div className="car-card-price">{car.price}</div>
                <div className="car-card-specs">
                  <div className="car-card-spec">{car.year}</div>
                  <div className="car-card-spec">{car.mileage} miles</div>
                  <div className="car-card-spec">{car.location}</div>
                </div>
                <div className="flex gap-2 mb-2">
                  {car.status === 'Auction' && (
                    <span className="bg-purple-400/20 text-purple-400 text-xs px-2 py-1 rounded-full flex items-center"><Tag className="h-3 w-3 mr-1" />Auction</span>
                  )}
                  {car.status === 'Buy Now' && (
                    <span className="bg-cyan-400/20 text-cyan-400 text-xs px-2 py-1 rounded-full flex items-center">Buy Now</span>
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
            <p className="text-[#b3c2d6]">Our verification process ensures that all vehicles meet our quality standards before being listed on the marketplace.</p>
          </div>
          <div className="bg-[#181f2e] rounded-xl p-8 text-center shadow-lg border border-[#1a2236]">
            <h3 className="text-xl font-semibold mb-2">Efficient Process</h3>
            <p className="text-[#b3c2d6]">Our streamlined process reduces paperwork and waiting times, allowing you to buy or sell vehicles faster than traditional methods.</p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/marketplace">
            <button className="px-8 py-3 rounded-lg bg-cyan-400 text-[#101624] font-bold text-lg shadow-lg hover:bg-cyan-300 transition">Get Started Today</button>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Vehicle Experience?</h2>
        <p className="text-lg text-[#b3c2d6] mb-8">Join thousands of users who are already buying and selling vehicles on the most transparent marketplace in the industry.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/marketplace">
            <button className="px-8 py-3 rounded-lg bg-cyan-400 text-[#101624] font-bold text-lg shadow-lg hover:bg-cyan-300 transition">Start Browsing</button>
          </Link>
          <Link href="/sell">
            <button className="px-8 py-3 rounded-lg border border-cyan-400 text-cyan-400 font-bold text-lg shadow-lg hover:bg-cyan-900 hover:text-white transition">List Your Vehicle</button>
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