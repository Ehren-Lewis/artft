

import '../styles/globals.css'
import { Inter } from 'next/font/google'

import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ArtFT',
  description: 'Art NFT Marketplace',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
          {children}
      </body>
    </html>
  )
}
