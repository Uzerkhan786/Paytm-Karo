import jsonwebtoken from 'jsonwebtoken';
import { user } from '../models/index.js';
export const auth = async (req, res, next) => {
    try {
        const token = req.header('x-access-token')
        console.log(token);
        const verify = jsonwebtoken.verify(token, 'shhhhh');

        const User = await user.findOne({ _id: verify.id })
        if (!User) {
            return res.json({
                data: '',
                message: 'Please authenticate'
            })
        }

        next();


    } catch (error) {
        res.json({
            data: 'unauthorized token',
            error: error
        })
    }
}
export const createV = async () => {
    console.log('lon he');
}