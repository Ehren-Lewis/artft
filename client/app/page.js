
'use client'
import Collection from '@/components/collections'
import MoreSellers from '@/components/moreSellers';
import Headliner from '@/components/headliner';
import EthereumButton from '@/components/ethbutton';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache()
})

export default function Home() {
  return (
    <main>
      <ApolloProvider client={client}>
      <div>
        <Headliner />
      </div>
          
          <div className='container mx-auto'>
          <Collection />
        </div>
        </ApolloProvider>
    </main>
  )
}
