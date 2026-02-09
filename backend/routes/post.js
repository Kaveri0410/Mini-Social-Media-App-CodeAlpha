const express = require("express");
const router = express.Router();

// Create Post
router.post("/create", (req, res) => {
  res.json({ message: "Post created successfully" });
});

// Get Posts
router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      content: "My first post"
    }
  ]);
});

module.exports = router;
