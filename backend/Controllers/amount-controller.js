import { user, amount, exchange } from "../models/index.js";
export const getAllUserAmountController = async (req, res) => {
    try {
        const Amount = await amount.find();
        res.status(200).json({
            data: Amount,
            mesaage: 'Successsfully get all the Amounts of User',
            error: {}
        })
    } catch (error) {
        res.status(402).json({
            data: '',
            message: ' Unable to get all  the amounts of user',
            error: error
        })
    }
}
export const postAmountController = async (req, res) => {
    try {
        const Amount = await amount.create(req.body);
        console.log(Amount);
        res.status(200).json({
            data: Amount,
            mesaage: 'Successfully posted the amount ',
            error: {}
        })
    } catch (error) {
        res.status(402).json({
            data: '',
            message: 'Unable to post the Amount',
            error: error
        })
    }
}

export const updateAmountDetailsControllers = async (req, res) => {
    try {
        const Amount = await amount.findByIdAndUpdate(req.params.id, {
            amount: req.body.amount
        });
        console.log(Amount);
        res.status(200).json({
            data: Amount,
            mesaage: 'Successfully updated the amount ',
            error: {}
        })
    } catch (error) {
        res.status(402).json({
            data: '',
            message: 'Unable to update the Amount',
            error: error
        })
    }
}

export const AmountDetailsController = async (req, res) => {
    try {
        const Amount = await amount.findById(req.params.id)
        console.log(Amount);
        res.status(200).json({
            data: Amount,
            mesaage: 'Successfully get the  the amount ',
            error: {}
        })
    } catch (error) {
        res.status(402).json({
            data: '',
            message: 'Unable to get the Amount',
            error: error
        })
    }
}