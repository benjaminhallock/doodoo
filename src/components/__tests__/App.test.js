import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// App.test.js
test('renders welcome message', () => {
  // Wrap App in BrowserRouter since you're using React Router
  render(
    <BrowserRouter
      future={{ 
        v7_startTransition: true,
        v7_relativeSplatPath: true 
      }}
    >
      <App />
    </BrowserRouter>
  );
  
  // Test for content that actually exists in your app
  const welcomeElement = screen.getByText(/Welcome!/i);
  expect(welcomeElement).toBeInTheDocument();
});