'use client'

import { usePhantom } from '@/providers/phantom-provider'
import { Button } from '@/components/ui/button'
import { Wallet, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export function PhantomConnectButton() {
  const { isConnected, publicKey, connect, disconnect } = usePhantom()
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnect = async () => {
    setIsConnecting(true)
    try {
      await connect()
    } catch (error) {
      console.error('Connection error:', error)
    } finally {
      setIsConnecting(false)
    }
  }

  const handleDisconnect = async () => {
    try {
      await disconnect()
    } catch (error) {
      console.error('Disconnection error:', error)
    }
  }

  if (isConnected && publicKey) {
    return (
      <Button
        onClick={handleDisconnect}
        className="flex items-center gap-2 bg-cyan-400 text-[#101624] font-bold hover:bg-cyan-300 transition"
      >
        <Wallet className="h-4 w-4" />
        <span className="hidden md:inline">
          {`${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`}
        </span>
      </Button>
    )
  }

  return (
    <Button
      onClick={handleConnect}
      disabled={isConnecting}
      className="flex items-center gap-2 bg-cyan-400 text-[#101624] font-bold hover:bg-cyan-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isConnecting ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Wallet className="h-4 w-4" />
      )}
      <span>{isConnecting ? 'Connecting...' : 'Connect Phantom'}</span>
    </Button>
  )
} 