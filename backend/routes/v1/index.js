import { AmountDetailsController, getAllUserAmountController, postAmountController, updateAmountDetailsControllers } from "../../Controllers/amount-controller.js";
import { sendControllers } from "../../Controllers/exchange-controller.js";
import { getAllUserController, getOneUserController, loginController, signupController } from "../../Controllers/user-controller.js";
import express from 'express';
import { auth } from "../../middlewares/userVerify.js";
export const router = express.Router();

router.get('/', getAllUserController);
router.post('/user/signup', signupController);
router.get('/user', getOneUserController);

router.post('/amount', postAmountController);
router.get('/amount/:id', AmountDetailsController);
router.patch('/amount/:id', updateAmountDetailsControllers)
router.get('/amount', getAllUserAmountController);


router.post('/exchange', auth, sendControllers)
router.post('/login', loginController)