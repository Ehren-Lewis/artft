'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "./cards"
import pocketDB from "@/pocketbase/connection";


// This home page will render some of the given art nft informattion that is available
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
            <h2 className="mt-10 text-6xl underline decoration-2 text-center mb-10" style={{color: " #2A9D8F "}}>Collections</h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7 justify-items-center">
            {
                pocketDbData ? pocketDbData.map( element => {
                    return (

                        // Price will have to be updated dynamically based on what the actual privce is
                        <Card key={element.id}
                            id={element.id}
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