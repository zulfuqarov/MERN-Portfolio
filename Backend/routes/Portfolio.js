import express from "express";
import { authenticateToken } from "../middleware/CheckToken.js";
import Portfolio from "../model/Portfolio.js";
import cloudinary from "cloudinary";
import mongoose from "mongoose";

const router = express.Router();
router.use(authenticateToken(["user", "admin"]));

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  const file = req.files;

  const dataParse = JSON.parse(data);

  if (file && file.PortfolioImg) {
    if (Array.isArray(file.PortfolioImg)) {
      for (const index in dataParse.myPortfolio) {
        const portfolioItem = dataParse.myPortfolio[index];
        const matchingFile = file.PortfolioImg.find(
          (item) => item.name === portfolioItem.imageName
        );

        if (matchingFile && matchingFile.tempFilePath) {
          const uploadImg = await cloudinary.uploader.upload(
            matchingFile.tempFilePath,
            {
              use_filename: true,
              folder: "Home",
            }
          );
          portfolioItem.image = uploadImg.url;
        }
      }
    } else {
      const uploadImg = await cloudinary.uploader.upload(
        file.PortfolioImg.tempFilePath,
        {
          use_filename: true,
          folder: "Home",
        }
      );
      dataParse.myPortfolio[0].image = uploadImg.url;
    }
  }

  if (file && file.serviceImg) {
    if (Array.isArray(file.serviceImg)) {
      for (const index in dataParse.service) {
        const serviceItem = dataParse.service[index];
        const matchingFile = file.serviceImg.find(
          (item) => item.name === serviceItem.imageName
        );

        if (matchingFile && matchingFile.tempFilePath) {
          const uploadImg = await cloudinary.uploader.upload(
            matchingFile.tempFilePath,
            {
              use_filename: true,
              folder: "Home",
            }
          );
          serviceItem.img = uploadImg.url;
        }
      }
    } else {
      const uploadImg = await cloudinary.uploader.upload(
        file.serviceImg.tempFilePath,
        {
          use_filename: true,
          folder: "Home",
        }
      );
      dataParse.service[0].img = uploadImg.url;
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
