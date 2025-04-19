import express from "express";
const router = express.Router();
const QuizResult = require("../models/QuizResult");

router.post("/save-results", async (req, res) => {
  try {
    const { quizId, results } = req.body;
    const doc = new QuizResult({ quizId, results });
    await doc.save();
    res.send("Saved to MongoDB");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;