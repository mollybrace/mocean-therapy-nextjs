import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '../components/NavBar'
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Roboto } from 'next/font/google';


const roboto = Roboto({
   subsets: ['latin'],
   weight: ['300'],
   variable: '--font-roboto'
  })

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
      <body className={`${roboto.variable} font-sans`}>
        <main className='relative overflow-hidden bg-moonstone'>
          <NavBar />
          <Hero />
      <main className={roboto.className}>
        {children}
        </main>
          <Footer />
        </main>
      </body>
    </html>
  )
}
