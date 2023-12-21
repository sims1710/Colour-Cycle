import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for expect(...).toBeInTheDocument()
import App from './App';

test('App component renders and button toggles text', () => {
  const { getByText, getByLabelText } = render(<App />);

  // Check if the App component renders
  expect(getByText('Colour Cycle')).toBeInTheDocument();

  // Check if the initial button text is "Start"
  expect(getByText('Start')).toBeInTheDocument();

  // Click the button
  fireEvent.click(getByText('Start'));

  // Check if the button text changes to "Stop" after clicking
  expect(getByText('Stop')).toBeInTheDocument();

  // Check if the color picker label is rendered
  expect(getByLabelText('Pick a colour:')).toBeInTheDocument();
});

