'use client'

import Link from "next/link"

// This home page will render some of the given art nft informattion that is available

import Card from "./cards"

const PopularSell = () => {
    // popular sell represents the top line of products available, like at any ecommerce website

    const data = []
    for (let i = 0; i < 12; i++ ) {
        data.push({item: `item${i}`, price: i + 1, productId: i})
    }



    return (

        // <div className="popular-items columns-3 flex justify-around w-full">
        <div>
            <div className="mx-auto pt-5">
                <Card price="0001"
                img="/nfts/nftfrog.png"
                artist="Fred Gully"/>
            </div>

        <h2 className="mt-10 text-6xl underline decoration-2" style={{color: " #2A9D8F "}}>Collection</h2>

        <div className="popular-items grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7">


          {
            data.map( element => {
                return (
                    // <a style={{padding: "0 100px"}}>{element.item}</a>
                    // <a className="mx-auto popular-card">Hi</a>
                    <div key={element.productId} className="w-1/8 h-40 bg-slate-800 shadow-md shadow-slate-50/20 card-style rounded">
                        <p className="text-center">{element.item}</p>
                        <Link href={`/item/${encodeURIComponent(element.productId)}`} className="pl-4">{element.item}</Link>
                    </div>
                )
            })
          }

        </div>
        </div>
    )
}

export default PopularSell;