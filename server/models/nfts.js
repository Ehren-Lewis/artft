const { Schema, model } = require("mongoose");



const nftSchema = new Schema({

    // The  type ifor token id, supply, and address are currently strings
    // because they are of type string from the infura API


    contractAddress: {
        type: String,
        required: ["true"],
        trim: true
    },

    // network : {
    //     type: String
    // },

    tokenId: {
        type: String,
        required: true,
        trim: true
    },
    supply: {
    type: String,
    required: true,
    trim: true,
    },

    contractType: {
        type: String,
        required: true,
        trim: true,
        },

    description: {
        type: String,
        },
    
    artistWebsite: {
        type: String,
        },

    image: {
        type: String,
        },
    
    artistAddress: {
        type: String,
        // Must refer to the artist model
        },

    artistPercentage: {
        type: String,
        },

    name: {
        type: String
    },

    status: {
        type: String
    },

    accountOwner: {
        type: String
    }

});


const NFTs = model("nfts", nftSchema);

module.exports = NFTs