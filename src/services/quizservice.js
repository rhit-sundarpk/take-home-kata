import axios from 'axios';

export const fetchQuizQuestions = async (category, difficulty) => {
  const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`;
  const response = await axios.get(url);
  return response.data.results;
};
