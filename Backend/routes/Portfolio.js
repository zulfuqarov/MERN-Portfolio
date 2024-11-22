import express from "express";
import { authenticateToken } from "../middleware/CheckToken.js";
import Portfolio from "../model/Portfolio.js";
import mongoose from "mongoose";

const router = express.Router();
router.use(authenticateToken(["user", "admin"]));

// router.post("/", async (req, res) => {
//   try {
//     const portfolio = new Portfolio({
//       ...req.body,
//       userName: req.user.userName,
//       userId: req.user.user,
//     });
//     await portfolio.save();
//     res
//       .status(200)
//       .json({ message: "portfolio succesfly save", portfolio: portfolio });
//   } catch (error) {
//     console.log(error);
//   }
// });

router.get("/", async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({
      userId: req.user.user,
    });
    if (portfolio) {
      res.json(portfolio);
    } else {
      res.status(404).json({ message: "Portfolio not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
