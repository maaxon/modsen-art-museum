import GlobalStyles from '@styles/globalStyles';
import {theme} from '@styles/theme';
import {Outlet} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import ErrorBoundary from '@utils/ErrorBoundary/errorBoundary.tsx';
import Footer from './Footer/footer.tsx';
import Header from './Header/header.tsx';
import Container from './container.tsx';
import {ContentWrapper, PageWrapper} from './layout.styles.ts';
import React from "react";
import {BookmarkProvider} from "@context/BookmarkContext/bookmarkContext.tsx";

const Layout: React.FC = () => {
    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme}>
                <BookmarkProvider>
                    <PageWrapper>
                        <GlobalStyles/>
                        <Header/>
                        <ContentWrapper>
                            <Container>
                                <Outlet/>
                            </Container>
                        </ContentWrapper>
                        <Footer/>
                    </PageWrapper>
                </BookmarkProvider>
            </ThemeProvider>
        </ErrorBoundary>
    );
};

export default Layout;
