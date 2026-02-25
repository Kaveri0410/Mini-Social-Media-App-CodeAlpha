const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/socialmedia")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

/* UPDATED POST MODEL */
const Post = mongoose.model("Post", {
  content: String,
  likes: {
    type: Number,
    default: 0
  },
  comments: {
    type: [String],
    default: []
  }
});

/* GET ALL POSTS */
app.get("/api/posts", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

/* CREATE POST */
app.post("/api/posts", async (req, res) => {
  const newPost = new Post({ content: req.body.content });
  await newPost.save();
  res.json(newPost);
});

/* LIKE POST */
app.post("/api/posts/:id/like", async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.likes += 1;
  await post.save();
  res.json(post);
});

/* COMMENT ON POST */
app.post("/api/posts/:id/comment", async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.comments.push(req.body.comment);
  await post.save();
  res.json(post);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});