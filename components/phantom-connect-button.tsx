'use client'

import { usePhantom } from '@/providers/phantom-provider'
import { Button } from '@/components/ui/button'
import { Wallet } from 'lucide-react'

export function PhantomConnectButton() {
  const phantomRef = usePhantom()

  const handleConnect = async () => {
    if (phantomRef?.current) {
      phantomRef.current.show()
      try {
        await phantomRef.current.solana.connect()
      } catch (e) {
        console.error(e)
      }
    }
  }

  return (
    <Button
      onClick={handleConnect}
      className="flex items-center gap-2 bg-cyan-400 text-[#101624] font-bold hover:bg-cyan-300 transition"
    >
      <Wallet className="h-4 w-4" />
      <span>Connect Phantom</span>
    </Button>
  )
} 