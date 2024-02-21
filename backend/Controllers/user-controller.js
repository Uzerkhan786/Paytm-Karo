import { user, amount, exchange } from "../models/index.js";
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
export const getAllUserController = async (req, res) => {
    try {
        const User = await user.find();
        res.status(200).json({
            data: User,
            mesaage: 'Successsfully get all the user',
            error: {}
        })
    } catch (error) {
        res.status(402).json({
            data: '',
            message: ' Unable to get all  the user',
            error: error
        })
    }

}
export const signupController = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        console.log(hash);
        const User = await user.create({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            mobileNumber: req.body.mobileNumber,
            amount: req.body.amount,

        });
        console.log(User);
        res.status(200).json({
            data: User,
            mesaage: 'Successfully register the user',
            error: {}
        })
    } catch (error) {
        res.status(402).json({
            data: '',
            message: 'Unable to register the user',
            error: error
        })
    }
}
export const loginController = async (req, res) => {
    try {
        const email = req.body.email;
        // console.log(email);
        const findUser = await user.findOne({ email });
        console.log(findUser);
        const a = jsonwebtoken.sign({
            id: findUser._id,
            email: findUser.email
        }, 'shhhhh', { expiresIn: 10000 * 6 });
        console.log(a);
        // console.log(findUser);
        if (findUser === null) {
            return res.status(400).json({ message: 'not found' })
        }
        const pass = await bcrypt.compare(req.body.password, findUser.password);
        console.log(pass);
        res.json({
            data: 'kon hge bhai'
        })

    } catch (error) {
        console.log(error);
    }
}

export const getOneUserController = async (req, res) => {
    try {
        const User = await user.findOne(req.body);
        console.log(User);
        res.status(200).json({
            data: User,
            mesaage: 'Successfully get the user',
            error: {}
        })
    } catch (error) {
        res.status(402).json({
            data: '',
            message: 'Unable to get the user',
            error: error
        })
    }
}