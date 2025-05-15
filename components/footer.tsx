'use client'

import Link from 'next/link'

export function Footer() {
  return (
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
  )
} 