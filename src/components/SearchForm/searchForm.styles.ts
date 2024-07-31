import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.large};
`;

export const Heading = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  width: 60%;
  background-color: #3939390D;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  flex-grow: 1;
  font-size: 14px;
`;

export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const showError = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10vw);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  margin-top: ${({ theme }) => theme.spacing.small};
  position: absolute;
  background-color: #f8d7da;
  border:1px solid #f5c2c7;
  animation:${showError} 0.8s ease-in-out;
  max-width: 400px;
  width: 80%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  top: -5vw;
  border-radius: 5px;
  
  @media(max-width: 480px){
    font-size: 12px;
  }
`;

export const SortBox = styled.section`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  width: 65%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;


export const MarginRight = styled.label`
  margin-right: ${({ theme }) => theme.spacing.small};
`;


export const Results = styled.section`
  margin-top: ${({ theme }) => theme.spacing.small};
  display: grid;
  width: 65%;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: ${({ theme }) => theme.spacing.small};
  @media (max-width: 480px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

