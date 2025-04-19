import { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { ref, onValue, set } from "firebase/database";

const QuizBattle = ({ quizId, studentId }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    const quizRef = ref(db, `quizzes/${quizId}`);
    onValue(quizRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setQuestions(data.questions);
    });
  }, [quizId]);

  const submitQuiz = () => {
    let total = 0;
    questions.forEach((q, i) => {
      if (parseInt(answers[i]) === q.answer) total += 1;
    });

    setScore(total);
    set(ref(db, `scores/${quizId}/${studentId}`), total);
  };

  return (
    <div>
      <h2>Quiz</h2>
      {questions.map((q, i) => (
        <div key={i}>
          <p>{q.question}</p>
          {q.options.map((opt, j) => (
            <label key={j}>
              <input
                type="radio"
                name={`q-${i}`}
                value={j}
                onChange={(e) => setAnswers({ ...answers, [i]: e.target.value })}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={submitQuiz}>Submit</button>
      {score > 0 && <p>Your Score: {score}</p>}
    </div>
  );
};

export default QuizBattle;
