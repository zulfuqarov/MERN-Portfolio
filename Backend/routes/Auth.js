import expres from "express";
import User from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authenticateToken } from "../middleware/CheckToken.js";

const router = expres.Router();

router.post("/Register", async (req, res) => {
  const { name, email, password } = req.body;

  if (name && email && password) {
    try {
      const CheckEmail = await User.findOne({
        email: email,
      });

      if (CheckEmail) {
        res.status(400).json({ message: "This email already exists" });
        return;
      }

      const HashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        name: name,
        email: email,
        password: HashedPassword,
      });

      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(400).send({ message: "All fields are required!" });
  }
});

router.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send({ message: "Email and password are required!" });
    return;
  }

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid Password" });
      return;
    }

    const payload = {
      user: user._id,
      role: user.role,
    };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET_CODE, {
      expiresIn: "3d",
    });

    res.cookie("jwtToken", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    res.status(200).json({
      message: "Your login has been successfully completed",
      token,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post(
  "/Logout",
  authenticateToken(["admin","user"]),
  async (req, res) => {
    try {
      res.clearCookie("jwtToken", {
        httpOnly: true,
        secure: true, // Sadece HTTPS üzerinden gönderim için
        sameSite: "strict",
      });
      res.status(200).json({ message: "Profile has been logged out" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);

export default router;
