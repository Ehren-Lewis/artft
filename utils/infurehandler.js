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
        walletAddress: walletAddress
    })

    // return type is metadata
    return res;
}

export default getCollectionsByWallet