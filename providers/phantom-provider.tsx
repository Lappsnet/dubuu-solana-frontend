'use client'

import { createContext, useContext, useEffect, useRef } from 'react'
import { createPhantom, Position } from '@phantom/wallet-sdk'

const PhantomContext = createContext<any>(null)

export function PhantomProvider({ children }: { children: React.ReactNode }) {
  const phantomRef = useRef<any>(null)

  useEffect(() => {
    async function initPhantom() {
      if (!phantomRef.current) {
        phantomRef.current = await createPhantom({
          position: Position.bottomRight,
          hideLauncherBeforeOnboarded: false,
          namespace: 'phantom',
        })
      }
    }
    initPhantom()
  }, [])

  return (
    <PhantomContext.Provider value={phantomRef}>
      {children}
    </PhantomContext.Provider>
  )
}

export function usePhantom() {
  return useContext(PhantomContext)
} 