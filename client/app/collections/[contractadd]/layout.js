export const metadata = {
    title: 'Collections | ArtFT',
    description: 'Temp',
}
import { ApolloProvider, useQuery, ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache()
  })

export default function sellLayout({ children }) {
    return (
        <>
            {children}
        </>
    )
}