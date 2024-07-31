import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from '../footer.tsx';

const theme = {
  colors: {
    footerBackground: '#000',
    footerLink: '#fff',
    footerText: '#fff',
    primary: '#ff0',
    footerLinkHover: '#f00',
  },
  spacing: {
    footerPadding: '1rem',
    small: '0.5rem',
  },
};

test('renders Footer component with correct elements', () => {
  const { getByText, getByRole } = render(
    <ThemeProvider theme={theme}>
      <Router>
        <Footer />
      </Router>
    </ThemeProvider>,
  );
  const titleElement = getByText(/Museum of/i);
  expect(titleElement).toBeInTheDocument();

  const logoElement = getByRole('link', { name: /Museum of Art/i });
  expect(logoElement).toBeInTheDocument();
});
