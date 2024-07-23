import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BurgerMenu from '../burgerMenu.tsx';

import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme.ts';

describe('burger menu component', () => {
  test('should render Your favorites link', () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <BurgerMenu />
        </MemoryRouter>
      </ThemeProvider>,
    );
    expect(screen.getByTestId('favorites-link')).toBeInTheDocument();
  });
});
