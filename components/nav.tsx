import Link from 'next/link'
import { PhantomConnectButton } from './phantom-connect-button'

export function Nav() {
  return (
    <nav className="border-b border-[#1a2236] bg-[#101624]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              Dubuu
            </Link>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/marketplace" className="text-[#cbd5e1] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Marketplace
              </Link>
              <Link href="/auctions" className="text-[#cbd5e1] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Auctions
              </Link>
              <Link href="/dashboard" className="text-[#cbd5e1] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <PhantomConnectButton />
          </div>
        </div>
      </div>
    </nav>
  )
} 