'use client'

import { useRouter } from "next/navigation";


const Item = ({params}) => {

    // const router = useRouter()
    // console.log(router.query.item)
    console.log(params)


    return (
        <h1>This is the item page {params.item}</h1>
    )

}

export default Item;