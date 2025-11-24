import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders counter and buttons', () => {
  render(<App />);
  const countText = screen.getByText(/Count:/i);
  expect(countText).toBeInTheDocument();

  const incrementButton = screen.getByText(/Increment/i);
  fireEvent.click(incrementButton);
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});
