import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  BurgerIcon,
  CloseButton,
  FavoritesLink,
  IconBookmark,
  MenuButton,
  Overlay,
  SideMenu,
  SideMenuContent,
} from './burgerMenu.styles.ts';

const BurgerMenu = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    document.body.style.overflow = isMenuOpen ?  "auto": "hidden"
    setIsMenuOpen((prev) => !prev);
  };



  return (
    <>
      <MenuButton onClick={toggleMenu}>
        <BurgerIcon />
      </MenuButton>
      {isMenuOpen && <Overlay onClick={toggleMenu} />}
      <SideMenu $isOpen={isMenuOpen}>
        <SideMenuContent>
          <CloseButton onClick={toggleMenu}>×</CloseButton>
          {location.pathname !== '/' && (
            <FavoritesLink $isOpen={isMenuOpen} to="/" onClick={toggleMenu} data-testid="home-link">
              <IconBookmark src="/home.png" alt="home" />
              <span>Home</span>
            </FavoritesLink>
          )}
          <FavoritesLink $isOpen={isMenuOpen} to="/favorites" onClick={toggleMenu} data-testid="favorites-link">
            <IconBookmark src="/bookmark-home.png" alt="bookmark" />
            <span>Your favorites</span>
          </FavoritesLink>
        </SideMenuContent>
      </SideMenu>
    </>
  );
};

export default BurgerMenu;
