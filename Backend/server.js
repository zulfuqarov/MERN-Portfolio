import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";

import AllRouter from "./AllRoutes.js";

// cors options
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

// dotenv
dotenv.config();

// Port
const port = process.env.PORT;

// coloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY,
});

const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTING_MONGO_DB);
    console.log("connecting db");
  } catch (error) {
    console.log(error);
  }
};

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true }));

app.use("/Api", AllRouter);

app.listen(port, async () => {
  await connectMongoDb();
  console.log("http://localhost:2222/");
});
