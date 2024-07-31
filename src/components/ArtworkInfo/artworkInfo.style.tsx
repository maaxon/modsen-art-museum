import styled from "styled-components";

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

export const Overview = styled.section`
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