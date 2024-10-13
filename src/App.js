import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizSelection from './components/QuizSelection';
import JeopardyQuiz from './components/JeopardyQuiz';
import MillionaireQuiz from './components/MillionaireQuiz';
import LogicPuzzleQuiz from './components/LogicPuzzleQuiz';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizSelection />} />
        <Route path="/jeopardy" element={<JeopardyQuiz />} />
        <Route path="/millionaire" element={<MillionaireQuiz />} />
        <Route path="/logic-puzzle" element={<LogicPuzzleQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
