const { SDK, Auth} = require("@infura/sdk");
require("dotenv").config();
// Create Auth object

const auth = new Auth({
  projectId: process.env.INFURA_API_KEY,
  secretId: process.env.INFURA_API_KEY_SECRET,
  privateKey: process.env.WALLET_PRIVATE_KEY,
  chainId: 5,
});

// Instantiate SDK
const sdk = new SDK(auth);

const getCollectionsByWallet = async (walletAddress) => {

    const res = await sdk.api.getCollectionsByWallet({
        walletAddress: walletAddress,
    })

    // return type is metadata
    console.log(res)
}

// const getNFTs = async (publicAddress) => {
//   sdk.api.getNFTs({
//     publicAddress: publicAddress ?? process.env.WALLET_PRIVATE_KEY,
//     includeMetadata: true
//   }).then(res => {
//     for ( let i = 0; i < res.assets.length; i++) {
//           res.assets[i].metadata ? console.log(res.assets[i].metadata) : ""
//     }
//     console.log(res)
//   })
// }

const getNFTsTest = async (publicAddress) => {
    sdk.api.getNFTs({
      publicAddress: publicAddress ?? process.env.WALLET_PRIVATE_KEY,
      includeMetadata: true
    }).then(res => {
        const account = res.account;
        const network = res.network;

        console.log(res)

        const currentAsset = res.assets[3]

        // console.log(res)

        // for ( let i = 0; i < dskjhf)
        const currentAssetMetadata = currentAsset.metadata;
        console.log(currentAssetMetadata)

      const { description, artist_website, image,
        artistRoyaltyInfo:{artistAddress, artistPercentage }, name} = currentAssetMetadata;

    //   console.log(description, artist_website, image, artistAddress, artistPercentage)
  })}

// getNFTsTest("0xB7618A3E0AFAE4BB2f783849F4738D278DE9D13d");

getCollectionsByWallet("0xB7618A3E0AFAE4BB2f783849F4738D278DE9D13d")


const handleNftCollections = async (contractAddress) => {
 
    const nfts = await sdk.api.getNFTsForCollection({
        contractAddress: contractAddress
    });


    // same exact nft information as the get nft by wallet
    console.log(nfts.assets[0])

    // console.log(nfts)
}

// handleNftCollections("0xc9f558b098639783ff4d4c7561da6e6052ed292b")