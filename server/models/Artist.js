const { Schema, model } = require("mongoose")



const artistSchema = new Schema ({
    
    walletAddress: {
        type: String,
        required: true,
        trim: true
    },

    permissionLevel: {
        type: Number
    },

    // orders: {
    //     type: mongoose.ObjectId,
    //     ref: "NFTs"
    // }
})



const Artist = model("artist", artistSchema);

module.exports = Artist;