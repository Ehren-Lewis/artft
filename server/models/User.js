import { Schema, model } from "mongoose";



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

export default User;