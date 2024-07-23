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

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const Author = styled.p`
  padding-top: ${({ theme }) => theme.spacing.small};
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 5px 0;
  font-weight: 500;
`;

export const Date = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.cardStatus};
  margin: 5px 0;
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 10%;
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 20px 0 10px;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.cardStatus};
`;

export const InfoItem = styled.li`
  margin-bottom: 5px;
  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
