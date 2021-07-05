import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/app';

test('renders App component', () => {
  render(<App />);
  expect(<App />).toBeTruthy();
});
