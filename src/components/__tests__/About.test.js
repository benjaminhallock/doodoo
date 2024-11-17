// src/components/__tests__/About.test.js
import { render, screen } from '@testing-library/react';
import About from '../About';

test('renders about page cards', () => {
  render(<About />);
  
  expect(screen.getByText(/Our Mission/i)).toBeInTheDocument();
  expect(screen.getByText(/Our Team/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Contact/i)).toHaveLength(2);
});