'use client'

import Link from "next/link"

// This home page will render some of the given art nft informattion that is available



const PopularSell = () => {
    // popular sell represents the top line of products available, like at any ecommerce website

    const data = []
    for (let i = 0; i < 12; i++ ) {
        data.push({item: `item${i}`, price: i + 1, productId: i})
    }



    return (

        // <div className="popular-items columns-3 flex justify-around w-full">
        <div>

            <h2 className="mt-10 text-light text-6xl underline underline-offset-10"> Popular Sellers</h2>

        <div className="popular-items grid sm:grid-cols-1 md:grid-cols-3 gap-3 mt-7">


          {
            data.map( element => {
                return (
                    // <a style={{padding: "0 100px"}}>{element.item}</a>
                    // <a className="mx-auto popular-card">Hi</a>
                    <div key={element.productId} className="w-1/8 h-40 bg-slate-800">
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