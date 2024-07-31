import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderDiv = styled.header`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.text},
    ${({ theme }) => theme.colors.headerGradientEnd}
  );
  position: relative;
`;

export const HeaderWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.footerPadding} 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.headerText};
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: end;
  gap: ${({ theme }) => theme.spacing.small};
  text-decoration: none;
`;

export const IconLogo = styled.section`
  width: 48px;
  height: 48px;
  background-image: url(/logo.png);
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Title = styled.h1`
  font-size: 1rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.headerText};
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LinkWrapper = styled.section`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.headerText};
  text-decoration: none;
  gap: 1rem;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const FavoritesLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.headerText};
  text-decoration: none;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const IconBookmark = styled.img`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.bookmarkIcon};
`;
