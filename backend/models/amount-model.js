import mongoose from "mongoose";
const amountSchema = new mongoose.Schema({
    sender: mongoose.Schema.Types.ObjectId,
    amount: {
        type: Number,
        required: true,
        default: 400
    }
})
export const amount = mongoose.model('Amount', amountSchema)