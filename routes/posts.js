const express = require("express");
const axios = require("axios");
const router = express.Router();

// GET all posts
router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// GET post by ID
router.get("/:id", async (req, res) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch post" });
  }
});

// CREATE a post
router.post("/", async (req, res) => {
  try {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to create post" });
  }
});

// DELETE a post
router.delete("/:id", async (req, res) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete post" });
  }
});

module.exports = router;
