const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://kaveri:kaveri123@cluster0.lpdvaca.mongodb.net/socialmedia"
)
.then(() => console.log("MongoDB Connected Successfully"))
.catch(err => console.log("Mongo Error:", err));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/post"));
app.use("/api/follow", require("./routes/follow"));

app.get("/", (req, res) => {
  res.send("Social Media App Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
