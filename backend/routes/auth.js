const express = require("express");
const router = express.Router();

// REGISTER
router.post("/register", (req, res) => {
  res.json({ message: "User Registered Successfully" });
});

// LOGIN
router.post("/login", (req, res) => {
  res.json({
    message: "Login Successful",
    user: {
      id: "123",
      name: "Test User",
      email: req.body.email
    }
  });
});

module.exports = router;
