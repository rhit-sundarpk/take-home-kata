import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizSelection = () => {
  const [category, setCategory] = useState('');
  const [format, setFormat] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && format) {
      navigate(`/${format}`);
    }

  };

  return (
    <div>
      <h1>Select a Quiz Topic</h1>
      <form onSubmit={handleSubmit}>
        <label style={{ margin: '20px 0' }}>
          Choose a Category:
          <div>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select...</option>
              <option value="9">General Knowledge</option>
              <option value="11">Movies</option>
              <option value="12">Music</option>
              <option value="15">Video Games</option>
              <option value="17">Science & Nature</option>
            </select>
          </div>
        </label>

        <label style={{ margin: '20px 0' }}>
          Choose a Format:
          <div>
          <select value={format} onChange={(e) => setFormat(e.target.value)}>
            <option value="">Select...</option>
            <option value="sudden-death">Sudden Death Quiz</option>
            <option value="jeopardy">Jeopardy Quiz</option>
            <option value="millionaire">Who Wants to Be a Millionaire?</option>
          </select>
          </div>
        </label>

        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
};

export default QuizSelection;
