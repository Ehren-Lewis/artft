'use client';
require("dotenv").config();
// Create Auth object
import { MetaMaskSDK } from "@metamask/sdk";

import NftCollection from "@/components/nftcollection";


const ArtistHome = () => {
    return (
        <div>
            <p>Home</p>
            <NftCollection />
        </div>
    )
}
export default ArtistHome;