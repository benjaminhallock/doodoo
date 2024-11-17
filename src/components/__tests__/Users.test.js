// src/components/__tests__/Users.test.js
import { render, screen } from '@testing-library/react';
import Users from '../Users';

test('renders users table', () => {
  render(<Users />);
  
  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/jane@example.com/i)).toBeInTheDocument();
  expect(screen.getByRole('table')).toBeInTheDocument();
});