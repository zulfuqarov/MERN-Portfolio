import expres from "express";
import User from "../model/User.js";
import bcrypt from "bcrypt";

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

export default router;
