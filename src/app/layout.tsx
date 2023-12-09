import type { Metadata } from 'next'
import './globals.css'
import NavBar from '../components/NavBar'
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
   subsets: ['latin'],
   weight: ['300', '400', '500', '700', '900'],
   style: ['normal', 'italic'],
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
      <div className='overflow-hidden'>
      <body className={roboto.className}>
        <main className='relative overflow-hidden bg-moonstone'>
          <NavBar />
          <Hero />
      <main >
        {children}
        </main>
          <Footer />
        </main>
      </body>
      </div>
    </html>
  )
}


//className={`${roboto.variable}`}