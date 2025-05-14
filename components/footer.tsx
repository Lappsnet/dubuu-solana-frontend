import Link from 'next/link'
import { Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Dubuu Marketplace</h3>
          <p className="text-[#94a3b8]">
            The future of vehicle trading. Buy, sell, and auction vehicles with confidence.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="social-link" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Marketplace</h4>
          <div className="footer-links">
            <Link href="/marketplace" className="footer-link">Browse Vehicles</Link>
            <Link href="/auctions" className="footer-link">Live Auctions</Link>
            <Link href="/sell" className="footer-link">Sell Your Vehicle</Link>
            <Link href="/watchlist" className="footer-link">Watchlist</Link>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Resources</h4>
          <div className="footer-links">
            <Link href="/guides" className="footer-link">Buying Guides</Link>
            <Link href="/faq" className="footer-link">FAQ</Link>
            <Link href="/docs" className="footer-link">Documentation</Link>
            <Link href="/blog" className="footer-link">Blog</Link>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Company</h4>
          <div className="footer-links">
            <Link href="/about" className="footer-link">About Us</Link>
            <Link href="/careers" className="footer-link">Careers</Link>
            <Link href="/contact" className="footer-link">Contact</Link>
            <Link href="/privacy" className="footer-link">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dubuu Marketplace. All rights reserved.</p>
      </div>
    </footer>
  )
} 