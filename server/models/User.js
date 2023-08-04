const { Schema, model } = require("mongoose")



const userSchema = new Schema({

    walletAddress: {
        type: String,
        required: true,
        trim: true
    },

    // Can be changed for a more complex address field down the line
    physicalAddress: {
        type: String
    }
})

const User = model("user", userSchema);

module.exports = User;