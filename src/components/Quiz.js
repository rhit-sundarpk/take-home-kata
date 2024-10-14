import React, { useState } from 'react';
import '../styles/Quiz.css';

const Quiz = () => {
  const [score, setScore] = useState(0);

  const handleAnswer = (points, isCorrect) => {
    if (isCorrect) {
      setScore(score + points);
    } else {
      setScore(score - points);
    }
  };    

  return (
    <div className = "wrapper">
      <h1 className = "class-heading">Sudden Death Quiz</h1>
      <p>Score: {score}</p>
      {/* Implement grid of questions here */}
    </div>
  );
};

export default Quiz;