import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/Quiz.css";

const Quiz = ({ subject }) => {
  const { isDarkMode } = useTheme();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: 2,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
    },
  ];

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimeLeft(30);
  };

  useEffect(() => {
    if (timeLeft > 0 && !showScore) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setShowScore(true);
    }
  }, [timeLeft, showScore]);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(30);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className={`quiz-page ${isDarkMode ? "dark-mode" : ""}`}>
      <div className={`quiz-container ${isDarkMode ? "dark-mode" : ""}`}>
        {showScore ? (
          <div className={`score-section ${isDarkMode ? "dark-mode" : ""}`}>
            <h2>Quiz Completed!</h2>
            <p>
              You scored {score} out of {questions.length}
            </p>
            <button
              className={`restart-button ${isDarkMode ? "dark-mode" : ""}`}
              onClick={resetQuiz}
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div className={`quiz-header ${isDarkMode ? "dark-mode" : ""}`}>
              <div className="question-count">
                Question {currentQuestion + 1}/{questions.length}
              </div>
              <div className={`timer ${timeLeft < 10 ? "warning" : ""}`}>
                Time left: {timeLeft}s
              </div>
            </div>

            <div
              className={`question-section ${isDarkMode ? "dark-mode" : ""}`}
            >
              <h2>{questions[currentQuestion].question}</h2>
            </div>

            <div className="answer-section">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className={`answer-button ${isDarkMode ? "dark-mode" : ""}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
