import React, { useState } from 'react';
import '../styles/Quiz.css';

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      question: "Is the sky blue?",
      answers: [
        { text: "True", isCorrect: true },
        { text: "False", isCorrect: false },
      ],
    },
    {
      question: "Is the earth flat?",
      answers: [
        { text: "True", isCorrect: false },
        { text: "False", isCorrect: true },
      ],
    },
  ];

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } 

    // Move to the next question
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // If there are no more questions, end the game
      setIsGameOver(true);
    }
    
    if (!isCorrect) {
      setIsGameOver(true);
    }
};  

  const restartQuiz = () => {
    setScore(0);
    setIsGameOver(false);
    setCurrentQuestion(0);
  };


  return (
    <div className="quiz-container">
      <h1 className="class-heading">Sudden Death Quiz</h1>
      {isGameOver ? (
        <div className="game-over">
          <h2>Game Over! Your score: <span className="quiz-score">{score}</span></h2>
          <button onClick={restartQuiz} className="restart-button">Play Again</button>
        </div>
      ) : (
        <div className="question-container">
          <p className="quiz-question">{questions[currentQuestion].question}</p>
          <ul className="quiz-options">
            {questions[currentQuestion].answers.map((answer, index) => (
              <li key={index} onClick={() => handleAnswer(answer.isCorrect)}>
                {answer.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;