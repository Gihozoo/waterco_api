import express from "express";

import {addRoute, viewRoutes, updateRoute, ViewPremiseOnRoute} from "../controllers/routesController.js";
import { authenticate } from '../middlewares/auth.js';

const routesRouter = express.Router();

// Add a route
routesRouter.post("/", authenticate, addRoute);

// View routes // routes
routesRouter.get("/", authenticate, viewRoutes);

// Update route record // routess/
routesRouter.put("/:id", authenticate, updateRoute);

// View Premises on Route
routesRouter.get("/bypremise/:id", authenticate, ViewPremiseOnRoute);



export default routesRouter;




