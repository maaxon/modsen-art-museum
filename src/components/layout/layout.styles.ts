import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentWrapper = styled.main`
  flex: 1;
  padding: ${({theme}) => theme.spacing.small};
  background-color: ${({theme}) => theme.colors.background};
`;
