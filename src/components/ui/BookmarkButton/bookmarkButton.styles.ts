import styled from 'styled-components';

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #F9F9F9;

  &:hover {
    background-color: #FBD7B24D;
  }
`;

export const BookmarkIcon = styled.img`
  width: 21px;
  height: 21px;
  cursor: pointer;
`;
