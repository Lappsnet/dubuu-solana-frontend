import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { PhantomProvider } from '@/providers/phantom-provider'
//import '../styles/car-card.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dubuu Marketplace',
  description: 'The future of vehicle trading on Solana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <PhantomProvider>
          {children}
        </PhantomProvider>
      </body>
    </html>
  )
}
