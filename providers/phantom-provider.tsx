'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { createPhantom, Position } from '@phantom/wallet-sdk'
import { toast } from 'sonner'

// Add type declaration for window.solana
declare global {
  interface Window {
    solana?: {
      isPhantom?: boolean;
      connect: () => Promise<any>;
      disconnect: () => Promise<any>;
      on: (event: string, callback: () => void) => void;
      removeListener: (event: string, callback: () => void) => void;
      publicKey?: { toString: () => string };
      isConnected?: boolean;
      signMessage: (message: Uint8Array, display?: string) => Promise<{ signature: Uint8Array; publicKey: any }>;
    }
  }
}

interface PhantomContextType {
  isConnected: boolean;
  publicKey: string | null;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  signMessage: (message: string) => Promise<boolean>;
}

const PhantomContext = createContext<PhantomContextType | null>(null)

export function PhantomProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false)
  const [publicKey, setPublicKey] = useState<string | null>(null)
  const phantomRef = useRef<any>(null)

  const signMessage = async (message: string): Promise<boolean> => {
    try {
      if (!window.solana?.isConnected) {
        toast.error('Please connect your wallet first')
        return false
      }

      const messageBytes = new TextEncoder().encode(message)
      const { signature } = await window.solana.signMessage(messageBytes, 'utf8')
      
      // Verify the signature (optional)
      // const isValid = nacl.sign.detached.verify(
      //   messageBytes,
      //   signature,
      //   window.solana.publicKey.toBytes()
      // )

      toast.success('Message signed successfully!', {
        duration: 5000,
        style: {
          background: '#10B981',
          color: 'white',
          border: 'none',
        },
      })
      return true
    } catch (error: any) {
      console.error('Signing error:', error)
      if (error.code === 4001) {
        toast.error('Message signing rejected by user')
      } else {
        toast.error('Failed to sign message')
      }
      return false
    }
  }

  const connect = async () => {
    try {
      if (!window.solana?.isPhantom) {
        toast.error('Phantom wallet not found! Please install Phantom wallet.')
        window.open('https://phantom.app/', '_blank')
        return
      }

      // Request connection
      await window.solana.connect()
      
      // Sign a welcome message
      const welcomeMessage = "Welcome to Dubuu Marketplace! Sign this message to verify your wallet ownership."
      const signed = await signMessage(welcomeMessage)
      
      if (signed) {
        setIsConnected(true)
        setPublicKey(window.solana.publicKey?.toString() || null)
        toast.success('Successfully connected to Phantom wallet!', {
          duration: 5000,
          style: {
            background: '#10B981',
            color: 'white',
            border: 'none',
          },
        })
      } else {
        // If signing fails, disconnect
        await window.solana.disconnect()
        setIsConnected(false)
        setPublicKey(null)
      }
    } catch (error: any) {
      console.error('Connection error:', error)
      if (error.code === 4001) {
        toast.error('Connection rejected by user')
      } else {
        toast.error('Failed to connect to Phantom wallet')
      }
    }
  }

  const disconnect = async () => {
    try {
      await window.solana?.disconnect()
      setIsConnected(false)
      setPublicKey(null)
      toast.info('Disconnected from Phantom wallet')
    } catch (error) {
      console.error('Disconnection error:', error)
      toast.error('Failed to disconnect from Phantom wallet')
    }
  }

  useEffect(() => {
    async function initPhantom() {
      try {
        // Check if Phantom is installed
        const isPhantomInstalled = window?.solana?.isPhantom

        if (!isPhantomInstalled) {
          console.warn('Phantom wallet not found!')
          return
        }

        if (!phantomRef.current) {
          phantomRef.current = await createPhantom({
            position: Position.bottomRight,
            hideLauncherBeforeOnboarded: false,
            namespace: 'phantom',
          })

          // Initialize the wallet connection
          if (window.solana) {
            phantomRef.current.solana = window.solana
          }
        }

        // Check initial connection
        if (window.solana?.isConnected) {
          setIsConnected(true)
          setPublicKey(window.solana.publicKey?.toString() || null)
          toast.success('Wallet connected!', {
            duration: 5000,
            style: {
              background: '#10B981',
              color: 'white',
              border: 'none',
            },
          })
        }

        // Set up event listeners
        const handleConnect = () => {
          setIsConnected(true)
          setPublicKey(window.solana?.publicKey?.toString() || null)
          toast.success('Wallet connected!', {
            duration: 5000,
            style: {
              background: '#10B981',
              color: 'white',
              border: 'none',
            },
          })
        }

        const handleDisconnect = () => {
          setIsConnected(false)
          setPublicKey(null)
          toast.info('Wallet disconnected')
        }

        window.solana?.on('connect', handleConnect)
        window.solana?.on('disconnect', handleDisconnect)

        return () => {
          window.solana?.removeListener('connect', handleConnect)
          window.solana?.removeListener('disconnect', handleDisconnect)
        }
      } catch (error) {
        console.error('Error initializing Phantom:', error)
      }
    }

    initPhantom()
  }, [])

  return (
    <PhantomContext.Provider value={{ isConnected, publicKey, connect, disconnect, signMessage }}>
      {children}
    </PhantomContext.Provider>
  )
}

export function usePhantom() {
  const context = useContext(PhantomContext)
  if (!context) {
    throw new Error('usePhantom must be used within a PhantomProvider')
  }
  return context
} 