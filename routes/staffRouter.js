import express from "express";

import { addUser, viewAllUsers, signIn, deleteStaff, updateStaff} from '../controllers/staffController.js';
import { authenticate } from '../middlewares/auth.js';


const staffRouter = express.Router();

//Add a User - Sign Up - Authenticate.
staffRouter.post("/", authenticate, addUser);

//Add a User - log in/ Sign In - No need of Authentication
staffRouter.post("/signin", signIn);

//View all Users users/ - Authenticate.
staffRouter.get("/", authenticate, viewAllUsers);

//Delete staff/ - Authenticate
staffRouter.delete("/:id", authenticate, deleteStaff);

//Update staff/ - Authenticate
staffRouter.put("/:id", authenticate, updateStaff)

export default staffRouter;