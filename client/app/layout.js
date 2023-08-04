

import '../styles/globals.css'
import { Inter } from 'next/font/google'

import Navbar from '@/components/navbar'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ArtFT',
  description: 'Art NFT Marketplace',
}
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache()
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloClient client={client}>
          <Navbar />
          {children}
          </ApolloClient>
      </body>
    </html>
  )
}
