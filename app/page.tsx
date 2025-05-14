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
      <footer className="mt-20 py-12 bg-[#101624] border-t border-[#1a2236] text-sm text-[#b3c2d6]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Logo and About */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src="/dubuu-logo.png" alt="Dubuu Logo" className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Dubuu</span>
            <p className="text-[#b3c2d6] text-center md:text-left">A Web3-based marketplace for buying, selling, and auctioning vehicles with transparency and security.</p>
            <div className="flex gap-3 mt-2">
              <a href="#" aria-label="Twitter" className="hover:text-cyan-400"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.936 0 .39.045.765.127 1.124C7.728 8.89 4.1 6.89 1.671 3.905c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.634A9.936 9.936 0 0 0 24 4.557z"/></svg></a>
              <a href="#" aria-label="Facebook" className="hover:text-cyan-400"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.592 1.325-1.326V1.326C24 .592 23.405 0 22.675 0"/></svg></a>
              <a href="#" aria-label="Instagram" className="hover:text-cyan-400"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.98.98-1.274 2.092-1.334 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.06 1.282.354 2.394 1.334 3.374.98.98 2.092 1.274 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.06 2.394-.354 3.374-1.334.98-.98 1.274-2.092 1.334-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.06-1.282-.354-2.394-1.334-3.374-.98-.98-2.092-1.274-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-cyan-400"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/></svg></a>
              <a href="https://github.com/Lappsnet/dubuu" aria-label="GitHub" className="hover:text-cyan-400" target="_blank" rel="noopener noreferrer"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
            </div>
            <div className="mt-2 text-xs text-[#b3c2d6]">Contact: <a href="mailto:team@lappsnet.com" className="underline hover:text-cyan-400">team@lappsnet.com</a></div>
          </div>

          {/* Marketplace Links */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="font-bold text-white mb-2">Marketplace</span>
            <Link href="/marketplace" className="hover:underline">Marketplace</Link>
            <Link href="/auctions" className="hover:underline">Live Auctions</Link>
            <Link href="/sell" className="hover:underline">Sell Your Vehicle</Link>
            <Link href="/watchlist" className="hover:underline">Watchlist</Link>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="font-bold text-white mb-2">Resources</span>
            <Link href="/guides" className="hover:underline">Guides</Link>
            <Link href="/faq" className="hover:underline">FAQ</Link>
            <Link href="/docs" className="hover:underline">Documentation</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <a href="https://github.com/Lappsnet/dubuu" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="font-bold text-white mb-2">Company</span>
            <Link href="/about" className="hover:underline">About Us</Link>
            <Link href="/careers" className="hover:underline">Careers</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-[#b3c2d6]">
          This project has been developed for the <a href="https://www.colosseum.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Solana Colosseum Hackathon</a>. All rights reserved.
        </div>
      </footer>
    </div>
  )
} 