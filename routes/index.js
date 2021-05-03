import express from "express";

import billRouter from "./billRouter.js";
import membersRouter from "./membersRouter.js";
import paymentsRouter from "./paymentsRouter.js";
import premiseRouter from "./premiseRouter.js";
import routesRouter from "./routesRouter.js";
import staffRouter from "./staffRouter.js";

const router = express.Router();

router.use("/members", membersRouter)
router.use("/premise", premiseRouter)
router.use("/routes", routesRouter)
router.use("/bill", billRouter)
router.use("/payments", paymentsRouter)
router.use("/staff", staffRouter)


export default router;