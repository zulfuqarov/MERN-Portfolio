import express from "express";

import Auth from "./routes/Auth.js";
import Portfolio from "./routes/Portfolio.js";

const router = express.Router();

router.use("/Auth", Auth);
router.use("/Portfolio", Portfolio);

export default router;
