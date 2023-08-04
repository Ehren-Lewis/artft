const { Schema, model } = require("mongoose");



const collectionSchema =  new Schema({

    contractAddress: {
        type: String,
        required: true,
        trim: true
    },

    network: {
        type: String,
        required: true
    },

    artistAddress: {
        type: String
    },

    // tradeData: {
    //     // query at runtime?
    // }
})


const Collection = model("collection", collectionSchema);

module.exports = Collection