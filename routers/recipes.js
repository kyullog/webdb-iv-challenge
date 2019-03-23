const express = require("express");
const db = require("../data/dbHelper.js");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const recipe = await db.getRecipe(id);
    res.status(200).json(recipe);
  } catch {
    res
      .status(500)
      .json({ error: "There was a problem retrieving the recipe" });
  }
});

module.exports = router;
