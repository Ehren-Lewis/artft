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

const getNFTs = async (publicAddress) => {
  sdk.api.getNFTs({
    publicAddress: publicAddress ?? process.env.WALLET_PRIVATE_KEY,
    includeMetadata: true
  }).then(res => {
    for ( let i = 0; i < res.assets.length; i++) {
          res.assets[i].metadata ? console.log(res.assets[i].metadata) : ""
    }
    console.log(res)
  })
}

// getNFTs("0xB7618A3E0AFAE4BB2f783849F4738D278DE9D13d");

getCollectionsByWallet("0xB7618A3E0AFAE4BB2f783849F4738D278DE9D13d")

// getCollectionsByWallet("0x3BA0f9D0D608D08dC2F023071d33B0d5dAB61A64").then( data => {
//   console.log(data)
// })
// export default getCollectionsByWallet

export { getCollectionsByWallet, getNFTs}
