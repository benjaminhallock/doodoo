// src/components/__tests__/Home.test.js
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

test('renders home page content', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  
  expect(screen.getByText(/Welcome!/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Learn more/i)).toHaveLength(2);});