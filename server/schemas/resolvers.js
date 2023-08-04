const { User, NFTs, Collection, Artist} = require("../models")

const { SDK, Auth} = require("@infura/sdk");
require("dotenv").config();

const auth = new Auth({
  projectId: process.env.INFURA_API_KEY,
  secretId: process.env.INFURA_API_KEY_SECRET,
  privateKey: process.env.WALLET_PRIVATE_KEY,
  chainId: 5,
});
const sdk = new SDK(auth);

const getNFTs = async (publicAddress) => {
   const res = await sdk.api.getNFTs({
     publicAddress: publicAddress ?? process.env.WALLET_PRIVATE_KEY,
     includeMetadata: true
   })
   const network = res.network;
   const account = res.account;
   const assets = res.assets;
   return { network, account, assets}
   }


const resolvers = {
 Query: {
    thisWalletQuery: async(address) => {
      return await getNFTs(address)
    }
 }
}

module.exports = resolvers;