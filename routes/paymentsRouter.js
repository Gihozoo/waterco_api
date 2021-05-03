import express from "express";
import {capturePayment, viewAllPayments, ViewPaymentByPremise} from "../controllers/paymentsController.js";
import { authenticate } from '../middlewares/auth.js';

const paymentsRouter = express.Router();

// capture payment
paymentsRouter.post("/", authenticate, capturePayment);

// View bills
paymentsRouter.get("/", authenticate, viewAllPayments);

// View bill by premise
paymentsRouter.get("/bypremise/:id", authenticate, ViewPaymentByPremise);


export default paymentsRouter;




