import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { PhantomProvider } from '@/providers/phantom-provider'
import { Toaster } from 'sonner'
import { Footer } from '@/components/footer'
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
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster richColors position="top-right" />
        </PhantomProvider>
      </body>
    </html>
  )
}
