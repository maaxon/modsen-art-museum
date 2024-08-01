import BurgerMenu from '@components/BurgerMenu';
import React from 'react';
import { useLocation } from 'react-router-dom';
import {Container} from '@components/layout';
import {
  FavoritesLink,
  HeaderDiv,
  HeaderWrapper,
  IconBookmark,
  IconLogo,
  LinkWrapper,
  LogoWrapper,
  Title,
} from './header.styles.ts';

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <HeaderDiv>
      <Container>
        <HeaderWrapper>
          <LogoWrapper to="/">
            <IconLogo />
            <Title>
              Museum of <span>Art</span>
            </Title>
          </LogoWrapper>
          <BurgerMenu />
          <LinkWrapper>
            {location.pathname !== '/' && (
              <FavoritesLink to="/">
                <IconBookmark src="/home.png" alt="home" />
                <span>Home</span>
              </FavoritesLink>
            )}
            <FavoritesLink to="/favorites">
              <IconBookmark src="/bookmark-home.png" alt="bookmark" />
              <span>Your favorites</span>
            </FavoritesLink>
          </LinkWrapper>
        </HeaderWrapper>
      </Container>
    </HeaderDiv>
  );
};

export default Header;
