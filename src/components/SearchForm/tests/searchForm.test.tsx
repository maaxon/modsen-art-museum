import { searchArtworks } from '@api/searchArtworks';
import '@testing-library/jest-dom';
import { fireEvent, render, screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import SearchForm from '../searchForm.tsx';

jest.mock('@api/searchArtworks');

const theme = {
  colors: {
    primary: '#ff0',
    error: '#f00',
  },
  spacing: {
    padding: '1rem',
    small: '0.5rem',
  },
};

const mockArtworks = [
  { id: '1', title: 'Artwork 1', artist: 'Artist 1' },
  { id: '2', title: 'Artwork 2', artist: 'Artist 2' },
];

beforeEach(() => {
  (searchArtworks as jest.Mock).mockResolvedValue([]);
});

test('renders SearchForm component with correct elements', () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <SearchForm />
      </Router>
    </ThemeProvider>,
  );

  expect(screen.getByText(/Let's Find Some/i)).toBeInTheDocument();
  expect(screen.getByText(/Art/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Search art, artist, work.../i)).toBeInTheDocument();
});

test('displays loading spinner during search', async () => {
  (searchArtworks as jest.Mock).mockResolvedValueOnce(mockArtworks);

  render(
    <ThemeProvider theme={theme}>
      <Router>
        <SearchForm />
      </Router>
    </ThemeProvider>,
  );

  fireEvent.change(screen.getByPlaceholderText(/Search art, artist, work.../i), { target: { value: 'Art' } });
  fireEvent.click(screen.getByAltText('search'));
});
