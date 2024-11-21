// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
})

test('renders counter message', () => {
  render(<Counter />);
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('+');
  const countValue = screen.getByTestId('count');

  fireEvent.click(incrementButton);
  expect(countValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  const decrementButton = screen.getByText('-');
  const countValue = screen.getByTestId('count');

  fireEvent.click(decrementButton);
  expect(countValue).toHaveTextContent('-1');
});
