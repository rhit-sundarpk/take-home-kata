import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizSelection from './components/QuizSelection';
import JeopardyQuiz from './components/JeopardyQuiz';
import MillionaireQuiz from './components/MillionaireQuiz';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<QuizSelection />} />
          <Route path="/sudden-death" element={<Quiz/>} />
          <Route path="/jeopardy" element={<JeopardyQuiz />} />
          <Route path="/millionaire" element={<MillionaireQuiz />} />
        </Routes>
      </div>
  );
}

export default App;
