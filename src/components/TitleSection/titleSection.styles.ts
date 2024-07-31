import styled from 'styled-components';

export const Header = styled.article`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const Subtitle = styled.div`
  color: ${({ theme }) => theme.colors.bookmarkIcon};
  font-size: 1.2rem;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.cardTitle};
  margin: 0;
  padding-bottom: ${({ theme }) => theme.spacing.small};
`;
