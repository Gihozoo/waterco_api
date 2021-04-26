import express from "express";
import {addRoute, viewRoutes, updateRoute} from "../controllers/routesController.js"

const routesRouter = express.Router();

// Add a route
routesRouter.post("/", addRoute);

// View a route // routes/:id
routesRouter.get("/",viewRoutes);

// Update route record // routess/
routesRouter.put("/:id", updateRoute);



export default routesRouter;




