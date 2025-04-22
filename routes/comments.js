const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/:postId", async (req, res) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.postId}/comments`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

module.exports = router;
