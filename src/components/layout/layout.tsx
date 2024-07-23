import GlobalStyles from '@styles/globalStyles';
import { theme } from '@styles/theme';
import { BookmarkProvider } from '../../../../modsen-art-museum-main/src/utils/BookmarkContext/bookmarkContext.tsx';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from '../../../../modsen-art-museum-main/src/utils/ErrorBoundary/errorBoundary.tsx';
import Footer from './Footer/footer.tsx';
import Header from './Header/header.tsx';
import Container from './container.tsx';
import { ContentWrapper, PageWrapper } from './layout.styles.ts';

const Layout: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <BookmarkProvider>
          <PageWrapper>
            <GlobalStyles />
            <Header />
            <ContentWrapper>
              <Container>
                <Outlet />
              </Container>
            </ContentWrapper>
            <Footer />
          </PageWrapper>
        </BookmarkProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default Layout;