// import React, { useEffect, useState } from "react";
// import { ref, get } from "firebase/database";
// import db from "../../firebase/firebaseConfig";
// import Question from "./Question";
// // import "../styles/Quiz.css";
// // import { useTheme } from "../context/ThemeContext"; 

// const OngoingQuiz = ({ quizTitle, onQuizComplete }) => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       const quizRef = ref(db, `quizzes/${quizTitle}/questions`);
//       const snapshot = await get(quizRef);
//       if (snapshot.exists()) {
//         setQuestions(snapshot.val());
//       }
//     };
//     fetchQuestions();
//   }, [quizTitle]);

//   const handleAnswer = (selectedIndex) => {
//     const current = questions[currentQuestionIndex];
//     if (current.answer === selectedIndex) {
//       setScore((prev) => prev + 1);
//     }

//     if (currentQuestionIndex + 1 < questions.length) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//     } else {
//       onQuizComplete(score + (current.answer === selectedIndex ? 1 : 0), questions.length);
//     }
//   };

//   if (questions.length === 0) return <p>Loading questions...</p>;

//   return (
//     <div>
//       <h3>{quizTitle}</h3>
//       <Question
//         questionData={questions[currentQuestionIndex]}
//         onAnswerSelect={handleAnswer}
//         questionNumber={currentQuestionIndex + 1}
//         total={questions.length}
//       />
//     </div>
//   );
// };

// export default OngoingQuiz;




import React, { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import db from "../../firebase/firebaseConfig";
import Question from "./Question";
import "./OngoingQuiz.css"; // 💡 Add this

const OngoingQuiz = ({ quizTitle, onQuizComplete }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const quizRef = ref(db, `quizzes/${quizTitle}/questions`);
      const snapshot = await get(quizRef);
      if (snapshot.exists()) {
        setQuestions(snapshot.val());
      }
    };
    fetchQuestions();
  }, [quizTitle]);

  const handleAnswer = (selectedIndex) => {
    const current = questions[currentQuestionIndex];
    if (current.answer === selectedIndex) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      onQuizComplete(score + (current.answer === selectedIndex ? 1 : 0), questions.length);
    }
  };

  if (questions.length === 0) return <p>Loading questions...</p>;

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <div className="quiz-header">
          <span className="quiz-title">Question {currentQuestionIndex + 1}/{questions.length}</span>
          <span className="timer-badge">Time left: 28s</span>
        </div>

        <Question
          questionData={questions[currentQuestionIndex]}
          onAnswerSelect={handleAnswer}
          questionNumber={currentQuestionIndex + 1}
          total={questions.length}
        />
      </div>
    </div>
  );
};

export default OngoingQuiz;
