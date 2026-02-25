const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Create Post
router.post("/", async (req, res) => {
  const post = new Post({ content: req.body.content });
  await post.save();
  res.json(post);
});

// Get All Posts
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Like Post
router.post("/:id/like", async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.likes += 1;
  await post.save();
  res.json(post);
});

// Comment on Post
router.post("/:id/comment", async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.comments.push(req.body.comment);
  await post.save();
  res.json(post);
});

module.exports = router;