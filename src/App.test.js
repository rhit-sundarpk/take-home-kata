import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders quiz selection options', () => {
  render(
    <Router>
      <QuizSelection />
    </Router>
  );
  expect(screen.getByText(/Jeopardy Quiz/i)).toBeInTheDocument();
  expect(screen.getByText(/Who Wants to Be a Millionaire?/i)).toBeInTheDocument();
  expect(screen.getByText(/Logic Puzzle Quiz/i)).toBeInTheDocument();
});