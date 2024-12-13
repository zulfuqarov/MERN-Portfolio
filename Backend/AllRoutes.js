import express from "express";

import Auth from "./routes/Auth.js";
import Portfolio from "./routes/Portfolio.js";
import Email from "./routes/Email.js"

const router = express.Router();

router.use("/Auth", Auth);
router.use("/Portfolio", Portfolio);
router.use("/Email", Email);

export default router;
