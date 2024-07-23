import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 0 100px 0;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.medium};
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-column-gap: 0;
    grid-template-columns: 1fr;
  }
`;

