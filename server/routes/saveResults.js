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

export default router;
// This code defines an Express router that handles saving quiz results to a MongoDB database.