'use client'

import Link from "next/link";

import { useEffect, useState } from "react";
// This home page will render some of the given art nft informattion that is available

import Card from "./cards"

import pocketDB from "@/pocketbase/connection";

const Collection =  () => {
    // popular sell represents the top line of products available, like at any ecommerce website
    const [pocketDbData, setPocketDbData] = useState();

    useEffect( () =>  {
        const fetchData = async () => {
            const data = await pocketDB.collection('test').getFullList();
            setPocketDbData(data);
        }
        fetchData().catch(console.error)
    }, [])





    return (

        // <div className="popular-items columns-3 flex justify-around w-full">
        <div>
        <h2 className="mt-10 text-6xl underline decoration-2" style={{color: " #2A9D8F "}}>Collection</h2>
        <div className="popular-items grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7">
          {
            pocketDbData ? pocketDbData.map( element => {
                return (

                    <Card key={element.id}
                        price={element.price}
                        artist={element.artist}
                        img={pocketDB.files.getUrl(element, element.imageref[0])}

                    />
                )
            }) : ""
          } 

        </div>
        </div>
    )
}

export default Collection;