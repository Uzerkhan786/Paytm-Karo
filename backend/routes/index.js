import { router } from "./v1/index.js";
import express from 'express';
export const Router = express.Router();
Router.use('/v1', router)
