
'use client'
import { usePathname } from "next/navigation"



const ArtistInformation = () => {

    const route = usePathname();

    console.log(route)

}

export default ArtistInformation;