require("dotenv").config();
// Create Auth object

import NftCollection from "@/components/nftcollection";

// Instantiate SDK
import getCollectionsByWallet from "@/utils/infurehandler";

const data = await getCollectionsByWallet("0x3BA0f9D0D608D08dC2F023071d33B0d5dAB61A64");

console.log(data);

const ArtistHome = () => {
    // const getNFTs = async (publicAddress) => {
    //   const result = await sdk.api.getNFTs({
    //     publicAddress: publicAddress,
    //   });
    //   console.log("collections:", result);
    // };
    
    // (async () => {
    //   try {
    //     nftinfo = await getNFTs("0x3BA0f9D0D608D08dC2F023071d33B0d5dAB61A64");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();
    

    return (
        <div>
            <p>Home</p>
            <NftCollection />
        </div>
    )
}
export default ArtistHome;