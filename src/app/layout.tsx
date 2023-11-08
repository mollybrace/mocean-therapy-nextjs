import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '../components/NavBar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mocean Therapy',
  description: 'Online Cognitive Hypnotherapy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className='relative overflow-hidden bg-moonstone'>
          <NavBar />
          <Hero />
      <main className={inter.className}>
        {children}
        </main>
          <Footer />
        </main>
      </body>
    </html>
  )
}
