'use client'

import Link from "next/link"

// This home page will render some of the given art nft informattion that is available

const MoreSellers = () => {
    // popular sell represents the top line of products available, like at any ecommerce website

    const data = []
    for (let i = 0; i < 15; i++ ) {
        data.push({item: `item${i}`, price: i + 1, productId: i})
    }



    return (
        <div>

            <h2 className="mt-10 text-light text-4xl underline underline-offset-10"> More Sellers</h2>

        <ul className="more-items">


          {
            data.map( element => {
                return (

                    <li key={element.productId} className="bg-stone-950" style={{display: "block"}}>
                        <p className="text-center">{element.item}</p>
                        {/* <Link href={`/item/${encodeURIComponent(element.productId)}`}>{element.item}</Link> */}
                    </li>
                )
            })
          }

        </ul>
        </div>
    )
}

export default MoreSellers;