import express from "express";
import { authenticateToken } from "../middleware/CheckToken.js";
import Portfolio from "../model/Portfolio.js";
import mongoose from "mongoose";

const router = express.Router();
router.use(authenticateToken(["user", "admin"]));

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    console.log(id);
    console.log(data);
    console.log(req.files);

    // const updatePortfolio = await Portfolio.findByIdAndUpdate(
    //   id,
    //   {
    //     $set: {
    //       ...data,
    //     },
    //   },
    //   { new: true }
    // );
    // if (!updatePortfolio) {
    //   return res.status(404).json({ message: "Portfolio not found" });
    // }
    // res.status(200).json(updatePortfolio);
  } catch (error) {
    console.log(error);
  }
});

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
