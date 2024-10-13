import React, { useState } from 'react';

const JeopardyQuiz = () => {
  const [score, setScore] = useState(0);

  const handleAnswer = (points, isCorrect) => {
    if (isCorrect) {
      setScore(score + points);
    } else {
      setScore(score - points);
    }
  };

  return (
    <div>
      <h1>Jeopardy Quiz</h1>
      <p>Score: {score}</p>
      {/* Implement grid of questions here */}
    </div>
  );
};

export default JeopardyQuiz;