import mongoose from "mongoose";
const exchangeSchema = new mongoose.Schema({
    senderNumber: {
        type: Number,
        required: true,

    },
    recieverNumber: {
        type: Number,
        required: true
    },
    total: Number
})
export const exchange = mongoose.model('Exchange', exchangeSchema);
