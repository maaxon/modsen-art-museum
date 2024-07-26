import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import BookmarkButton from '../bookmarkButton.tsx';
import {useBookmarks} from "@context/BookmarkContext/bookmarkContext.tsx";

// Mock the useBookmarks hook
jest.mock('@context/BookmarkContext/bookmarkContext', () => ({
  useBookmarks: jest.fn(),
}));

const theme = {
  colors: {
    primary: '#000',
    secondary: '#fff',
  },
};

test('renders BookmarkButton component and toggles bookmark state', () => {
  const addBookmark = jest.fn();
  const removeBookmark = jest.fn();
  const bookmarks = new Set();

  (useBookmarks as jest.Mock).mockReturnValue({
    bookmarks,
    addBookmark,
    removeBookmark,
  });

  const { rerender } = render(
    <ThemeProvider theme={theme}>
      <BookmarkButton id={1} />
    </ThemeProvider>,
  );

  // Simulate that bookmark has been added
  bookmarks.add(1);
  (useBookmarks as jest.Mock).mockReturnValue({
    bookmarks,
    addBookmark,
    removeBookmark,
  });

  // Rerender the component to reflect state change
  rerender(
    <ThemeProvider theme={theme}>
      <BookmarkButton id={1} />
    </ThemeProvider>,
  );
});
