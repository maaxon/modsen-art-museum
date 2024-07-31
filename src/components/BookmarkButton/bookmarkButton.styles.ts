import styled from 'styled-components';

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.bookmark};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bookmarkHover};;
  }
`;

export const BookmarkIcon = styled.img`
  width: 21px;
  height: 21px;
  cursor: pointer;
`;
