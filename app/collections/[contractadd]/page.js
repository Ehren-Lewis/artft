'use client'
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
const ThisCollection = () => {

    const params = useParams()

    return (

        <div className="container mx-auto">
                <p>{params.contractadd}</p>
                <p>Title</p>

                <p>Map of all items in collection</p>
                <p>Each map will then link to the tokenid page</p>
        </div>
    )
}

export default ThisCollection;