import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import db from "../../firebase/firebaseConfig";
import OngoingQuiz from "./OngoingQuiz";
import "../../styles/Quiz.css";

const Quizz = () => {
  const [quizTitles, setQuizTitles] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const quizzesRef = ref(db, "quizzes");
    onValue(quizzesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setQuizTitles(Object.keys(data));
      }
      setLoading(false);
    });
  }, []);

  const handleQuizComplete = (finalScore, total) => {
    setScore({ score: finalScore, total });
    setSelectedQuiz(null);
  };

  const resetQuiz = () => {
    setScore(null);
  };

  if (loading) {
    return (
      <div className="quiz-page">
        <div className="quiz-container">
          <p className="loading-text">Loading quizzes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        {!selectedQuiz && !score && (
          <>
            <div className="quiz-header">
              <h2 className="quiz-title">Quiz App</h2>
            </div>
            <div className="selection-container">
              <h3 className="selection-title">Select a Quiz:</h3>
              <div className="quiz-options-grid">
                {quizTitles.map((title, index) => (
                  <button
                    key={index}
                    className="quiz-option-button"
                    onClick={() => setSelectedQuiz(title)}
                  >
                    [ {title} ]
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {selectedQuiz && (
          <OngoingQuiz 
            quizTitle={selectedQuiz} 
            onQuizComplete={handleQuizComplete} 
          />
        )}

        {score && (
          <div className="results-container">
            <div className="quiz-header">
              <h2 className="quiz-title">Quiz Results</h2>
            </div>
            <div className="result-content">
              <h3 className="result-heading">Quiz Finished!</h3>
              <div className="score-display">
                <p className="score-text">Your Score: <span className="score-value">{score.score}</span> / {score.total}</p>
              </div>
              <button className="restart-button" onClick={resetQuiz}>
                Take Another Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizz;