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

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const dish = await db.getDish(id);
    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(404).json({ error: "No dish exists with that ID" });
    }
  } catch (err) {
    res.status(500).json({ error: "There was a problem retrieving the dish" });
  }
});

module.exports = router;
