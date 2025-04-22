const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  const { email } = req.query;
  const url = email
    ? `https://jsonplaceholder.typicode.com/users?email=${email}`
    : `https://jsonplaceholder.typicode.com/users`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

module.exports = router;
