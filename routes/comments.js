const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/:postId", async (req, res) => {
  const { postId } = req.params;

  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    res.json(data);
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error.message);
    res.status(error.response?.status || 500).json({
      error: "Failed to fetch comments",
    });
  }
});

module.exports = router;
