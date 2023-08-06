'use client'
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import pocketDB from "@/pocketbase/connection";
import { useState, useEffect } from "react";

import { ApolloProvider, useQuery, ApolloClient, InMemoryCache } from "@apollo/client";
import { WALLETNFTS } from "@/utils/apollo/queries";


const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache()
  })
  

const ThisCollection = () => {
    const [pocketDbData, setPocketDbData] = useState();

    const { loading, error, data} = useQuery( WALLETNFTS, {
        variables: pocketDB.walletAddress,
        client: client
    })

const nftdata = data?.thisWalletQuery;

    nftdata ? console.log(nftdata.assets) : ""

    nftdata ? nftdata.assets.map(ele => {
        ele.metadata?.image.replace("i", "jkhg") ?? "";
        console.log(ele.metadata?.image.replace("i", "odsfh"))
        console.log(ele.metadata?.image)
    }) : ""

    useEffect( () =>  {
        const fetchData = async () => {
            const data = await pocketDB.collection('fakeartist').getFirstListItem('walletAddress="0xB7618A3E0AFAE4BB2f783849F4738D278DE9D13d"');
            console.log(data.walletAddress)
            setPocketDbData(data);
        }
        fetchData().catch(console.error)
    }, [])
    

    
    const params = useParams()

    return (
        <ApolloProvider client={client}>

        <div className="container mx-auto">
                <p>{params.contractadd}</p>
                <p>Title</p>

                <p>Map of all items in collection</p>
                <p>Each map will then link to the tokenid page</p>
                

                {nftdata ? 
                    nftdata.assets.map(ele => {
                        return (
                            // <div key={ele.contract}>{ele.metadata?.image}</div>
                            
                        <img src={`https://art-ft.infura-ipfs.io/${ele.metadata?.image.replace(":/", "")}`} />
                        )
                    })
                : ""}
                
                
        </div>
        </ApolloProvider>
    )
}

export default ThisCollection;