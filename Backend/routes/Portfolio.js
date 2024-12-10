import express from "express";
import { authenticateToken } from "../middleware/CheckToken.js";
import Portfolio from "../model/Portfolio.js";
import cloudinary from "cloudinary";
import mongoose from "mongoose";

const router = express.Router();

router.post("/Search", async (req, res) => {
  const { search } = req.body
  try {
    const findPortfolio = await Portfolio.find({
      position: { $regex: new RegExp("\\b" + search, "i") },
    })
    if (findPortfolio.length > 0) {
      return res.status(200).json(findPortfolio);
    } else {
      return res.status(404).json({ message: "This User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

router.get("/GetPortfolio/:id", async (req, res) => {
  const { id } = req.params
  try {
    const getPortfolio = await Portfolio.findById(id)
    if (!getPortfolio) {
      return res.status(404).json({ message: "Portfolio not found" });
    }
    res.json(getPortfolio);
  } catch (error) {
    console.log(error)
  }
})

router.use(authenticateToken(["user", "admin"]));

router.put("/", async (req, res) => {
  const { data } = req.body;
  const file = req.files;

  const dataParse = JSON.parse(data);

  if (file && file.PortfolioImg) {
    for (const index in dataParse.myPortfolio) {
      const portfolioItem = dataParse.myPortfolio[index];
      let matchingFile = null;

      if (Array.isArray(file.PortfolioImg)) {
        matchingFile = file.PortfolioImg.find(
          (item) => item.name === portfolioItem.imageName
        );
      } else if (file.PortfolioImg && file.PortfolioImg.name === portfolioItem.imageName) {
        matchingFile = file.PortfolioImg;
      }

      if (matchingFile && matchingFile.tempFilePath) {
        const uploadImg = await cloudinary.uploader.upload(
          matchingFile.tempFilePath,
          {
            use_filename: true,
            folder: "Home",
          }
        );
        portfolioItem.image = uploadImg.url;
      } else {
        portfolioItem.image = portfolioItem.image ? portfolioItem.image : ''
      }
    }

  }

  if (file && file.serviceImg) {
    for (const index in dataParse.service) {
      const serviceItem = dataParse.service[index];
      let matchingFile = null;

      if (Array.isArray(file.serviceImg)) {
        matchingFile = file.serviceImg.find(
          (item) => item.name === serviceItem.imageName
        );
      } else if (file.serviceImg && file.serviceImg.name === serviceItem.imageName) {
        matchingFile = file.serviceImg;
      }

      if (matchingFile && matchingFile.tempFilePath) {
        const uploadImg = await cloudinary.uploader.upload(
          matchingFile.tempFilePath,
          {
            use_filename: true,
            folder: "Home",
          }
        );
        serviceItem.img = uploadImg.url;
      } else {
        serviceItem.img = serviceItem.img ? serviceItem.img : ''
      }
    }
  }

  if (file && file.headerImg) {
    const uploadImg = await cloudinary.uploader.upload(
      file.headerImg.tempFilePath,
      {
        use_filename: true,
        folder: "Home",
      }
    );
    dataParse.headerImg = uploadImg.url;
  }

  if (file && file.aboutMeImg) {
    const uploadImg = await cloudinary.uploader.upload(
      file.aboutMeImg.tempFilePath,
      {
        use_filename: true,
        folder: "Home",
      }
    );
    dataParse.aboutMeImg = uploadImg.url;
  }

  try {
    const updatePortfolio = await Portfolio.findOneAndUpdate(
      {
        userId: req.user.user,
      },
      {
        $set: {
          ...dataParse,
          edit: true
        },
      },
      { new: true }
    );
    if (!updatePortfolio) {
      return res.status(404).json({ message: "Portfolio not found" });
    }
    res.status(200).json(updatePortfolio);

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
