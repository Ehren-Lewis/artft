import Image from "next/image";
import Link from "next/link";

const Card = ({img, price, artist, id, title}) => {

    return (

        <div className="shadow-lg border rounded max-w-sm h-min shadow-slate-50/20 card-style">
            <div className="">
                <Link href={{pathname: `/collection/${id}`, query: {contractadd: id}}}>
                <p className="text-center border-b">{title ? title :  "Collection Title"}</p>
                    <img className="w-full" src={img} alt="NFT FROG" />
                </Link>
            </div>

            <div className="card-information bg-black py-3">
                <p><span className="text-coral">Price: </span>{price} ETH</p>
                    {/* This link below will have to include the artist address under the hood */}
                <p><span className="text-coral">Artist: </span><Link href={`/artists/${artist}`}>{artist}</Link></p>
            </div>

        </div>
    )
}

export default Card;