import express from "express";

import {addPremise, viewPremise, viewAllPremises, updatePremise, viewMemberPremise} from "../controllers/premiseController.js";
import { authenticate } from '../middlewares/auth.js';

const premiseRouter = express.Router();

// Add a premise
premiseRouter.post("/", authenticate, addPremise);

// View a premise // premise/:id
premiseRouter.get("/:id", authenticate, viewPremise);

// View all premises // premise/
premiseRouter.get("/", authenticate, viewAllPremises);

// Update premise record // premise/
premiseRouter.put("/:id", authenticate, updatePremise);

// view member premise
premiseRouter.get("/bymember/:id", authenticate, viewMemberPremise)

export default premiseRouter;




