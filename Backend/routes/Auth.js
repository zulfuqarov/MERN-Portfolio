import expres from "express";
import User from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Portfolio from "../model/Portfolio.js";

const router = expres.Router();

router.post("/Register", async (req, res) => {
  const { name, email, password, position } = req.body;

  if (name && email && password && position) {
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
        position: position,
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
      userName: user.name,
      user: user._id,
      role: user.role,
    };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET_CODE, {
      expiresIn: "3d",
    });

    res.cookie("jwtToken", token, {
      // httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    let PortfolioCheck = await Portfolio.findOne({
      userId: user._id,
    });

    if (!PortfolioCheck) {
      PortfolioCheck = new Portfolio({
        userName: user.name,
        userId: user._id,
      });
      await PortfolioCheck.save();
    }

    res.status(200).json({
      message: "Your login has been successfully completed",
      token,
      edit: PortfolioCheck.edit
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/Logout", async (req, res) => {
  const token = req.cookies.jwtToken;

  try {
    if (!token) {
      res.status(400).json({ message: "profile not sigin" });
      return;
    }
    res.clearCookie("jwtToken", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    res.status(200).json({ message: "Profile has been logged out" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
