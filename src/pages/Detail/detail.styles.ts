import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.medium} 0;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ImagePlaceholder = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.imagePlaceholder};
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.imagePlaceholderText};
  font-size: 1.125rem;
  overflow: hidden;
`;

export const AddToFav = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing.medium};
  top: ${({ theme }) => theme.spacing.medium};
`;

export const Image = styled.img`
  align-self: start;
  width: 100%;
  max-height: 480px;
  object-fit: contain;
`;

export const Mock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: start;
  width: 100%;
  min-height: 600px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.imagePlaceholder};
`;

export const Content = styled.section`
  width: 100%;
  max-width: 600px;
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


