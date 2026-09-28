const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Please provide a username, email, and password.",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await User.findOne({ email: normalizedEmail });

    if (existingUser) {
      return res.status(400).json({
        message: "A user with that email already exists.",
      });
    }

    const newUser = new User({
      username,
      email: normalizedEmail,
      password,
    });

    await newUser.save();

    const safeUser = newUser.toObject();
    delete safeUser.password;

    return res.status(201).json(safeUser);
  } catch (error) {
    console.error("Registration error:", error.message);

    return res.status(500).json({
      message: "Server error while registering user.",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Incorrect email or password.",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password.",
      });
    }

    const passwordIsCorrect = await user.isCorrectPassword(password);

    if (!passwordIsCorrect) {
      return res.status(400).json({
        message: "Incorrect email or password.",
      });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is missing from the .env file.");
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error.message);

    return res.status(500).json({
      message: "Server error while logging in.",
    });
  }
});

module.exports = router;
