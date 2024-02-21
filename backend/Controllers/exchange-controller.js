import { exchange, user, amount } from "../models/index.js";
export const sendControllers = async (req, res) => {
    try {
        const response = await exchange.create(req.body);
        const senderId = await user.findOne({ mobileNumber: req.body.senderNumber });
        console.log(senderId);
        const recieverId = await user.findOne({ mobileNumber: req.body.recieverNumber });
        console.log(recieverId);
        const senderAmount = senderId.amount;
        const recieverAmount = recieverId.amount;

        await user.findByIdAndUpdate(senderId._id, {
            amount: senderAmount - response.total
        }, { new: true });

        await user.findByIdAndUpdate(recieverId._id, {
            amount: recieverAmount + response.total
        }, { new: true })

        res.json({
            success: true,
            message: `Successfully send ${response.total} rupees`,
            data: response,
            error: ''
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `Unable to send the moey`,
            data: '',
            error: error
        })

    }
}