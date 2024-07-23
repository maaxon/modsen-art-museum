import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const Bookmark = styled.img`
  width: 48px;
  padding-top: 2px;
`;

export const Highlight = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: ${({ theme }) => theme.spacing.large};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.medium};
  padding-bottom: 64px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-column-gap: 0;
    grid-template-columns: 1fr;
  }
`;
