import React, { useState } from 'react';

const MillionaireQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [lifelines, setLifelines] = useState({ fiftyFifty: true, hint: true });

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 100);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div>
      <h1>Who Wants to Be a Millionaire?</h1>
      <p>Score: {score}</p>
      {/* Add question and lifeline buttons */}
    </div>
  );
};

export default MillionaireQuiz;