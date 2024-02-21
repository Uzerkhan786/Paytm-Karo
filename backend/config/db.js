import mongoose from "mongoose";

export const MongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/paytm');
        console.log('mongo DB Connected');
    }
    catch (error) {
        console.log('Sonething went wrong', error);
    }
}

