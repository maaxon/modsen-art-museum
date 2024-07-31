import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from '../header.tsx';

const theme = {
  colors: {
    headerBackground: '#000',
    headerLink: '#fff',
    headerText: '#fff',
    primary: '#ff0',
    headerLinkHover: '#f00',
  },
  spacing: {
    headerPadding: '1rem',
    small: '0.5rem',
  },
};

test('renders Header component with correct elements', () => {
  const { getByText, getAllByRole } = render(
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
      </Router>
    </ThemeProvider>,
  );

  const titleElement = getByText(/Museum of/i);
  expect(titleElement).toBeInTheDocument();

  const logoElement = getAllByRole('link', { name: /Museum of Art/i })[0];
  expect(logoElement).toBeInTheDocument();

  const favoritesLinkElements = getAllByRole('link', { name: /Your favorites/i });
  expect(favoritesLinkElements.length).toBeGreaterThan(0);
});
