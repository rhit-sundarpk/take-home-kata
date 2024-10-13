import React from 'react';
import { Link } from 'react-router-dom';

const QuizSelection = () => {
  return (
    <div>
      <h1>Select a Quiz Format</h1>
      <ul>
        <li><Link to="/jeopardy">Jeopardy Quiz</Link></li>
        <li><Link to="/millionaire">Who Wants to Be a Millionaire?</Link></li>
        <li><Link to="/logic-puzzle">Logic Puzzle Quiz</Link></li>
      </ul>
    </div>
  );
};

export default QuizSelection;