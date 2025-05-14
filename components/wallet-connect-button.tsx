'use client'

import { useAppKit } from '@reown/appkit/react'
import { Button } from '@/components/ui/button'
import { Link, Wallet } from 'lucide-react'

export function WalletConnectButton() {
  const { open } = useAppKit()

  const handleOpen = async () => {
    try {
      await open()
    } catch (error) {
      console.error('Failed to open wallet modal:', error)
    }
  }

  return (
    <Button
      onClick={handleOpen}
      className="flex items-center gap-2 bg-cyan-400 text-[#101624] font-bold hover:bg-cyan-300 transition"
    >
      <Wallet className="h-4 w-4" />
      <Link href="https://app.reown.com/connect">
        <span>Connect Wallet</span>
      </Link>
    </Button>
  )
} 