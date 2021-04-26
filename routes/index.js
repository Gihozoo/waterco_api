import express from "express";

import membersRouter from "./membersRouter.js";
import premiseRouter from "./premiseRouter.js";
import routesRouter from "./routesRouter.js";

const router = express.Router();

router.use("/members", membersRouter)
router.use("/premise", premiseRouter)
router.use("/routes", routesRouter)



export default router;