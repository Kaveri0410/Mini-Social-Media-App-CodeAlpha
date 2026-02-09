const express = require("express");
const router = express.Router();

router.post("/follow", (req, res) => {
  res.json({ message: "User followed successfully" });
});

module.exports = router;
