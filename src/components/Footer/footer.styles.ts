import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterDiv = styled.footer`
  background: ${({ theme }) => theme.colors.footerBackground};
  margin-top: auto;
`;

export const FooterWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.footerPadding} 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.footerLink};
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: end;
  gap: ${({ theme }) => theme.spacing.small};
  text-decoration: none;
`;

export const IconLogo = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(/logo.png);
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Title = styled.h1`
  font-size: 1rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.footerText};
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ModsenLogo = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.colors.footerLink};
  width: 165px;
  height: 60px;
  text-decoration: none;
  background-image: url(/logo-modsen.png);
  background-repeat: no-repeat;
  background-size: contain;

  &:hover {
    text-decoration: underline;
    color: ${({theme}) => theme.colors.footerLinkHover};
  }
`;
