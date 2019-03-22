const express = require("express");
const db = require("../data/dbHelper.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const dishes = await db.getDishes();
    res.status(200).json(dishes);
  } catch {
    res
      .status(500)
      .json({ error: "There was an error revtrieving the dishes" });
  }
});

module.exports = router;
