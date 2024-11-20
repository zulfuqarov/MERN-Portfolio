import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World from the GET route" });
});

export default router;
