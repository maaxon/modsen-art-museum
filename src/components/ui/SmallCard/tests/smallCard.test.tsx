import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { BookmarkProvider } from '@utils/BookmarkContext/bookmarkContext.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme.ts';
import SmallCard from '../smallCard.tsx';

const mockData = {
  id: 1,
  title: 'string',
  artist_display: 'string',
  artist_title: 'string',
  is_public_domain: true,
  date: 1,
};

describe('small card component', () => {
  test('should render card', () => {
    render(
      <ThemeProvider theme={theme}>
        <BookmarkProvider>
          <MemoryRouter>
            <SmallCard artwork={mockData} />
          </MemoryRouter>
        </BookmarkProvider>
      </ThemeProvider>,
    );
    expect(screen.getByTestId('favorites-link')).toBeInTheDocument();
  });
});
