import { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";

const Leaderboard = ({ quizId }) => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const scoresRef = ref(db, `scores/${quizId}`);
    onValue(scoresRef, (snapshot) => {
      const data = snapshot.val() || {};
      const sorted = Object.entries(data).sort((a, b) => b[1] - a[1]);
      setScores(sorted);
    });
  }, [quizId]);

  return (
    <div>
      <h2>Leaderboard</h2>
      {scores.map(([uid, score], i) => (
        <p key={uid}>{i + 1}. {uid}: {score}</p>
      ))}
    </div>
  );
};

export default Leaderboard;
