import styled from 'styled-components';

export const SortButtonWrapper = styled.div`
  width: 70px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid gainsboro;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.boxShadow};
  box-sizing: border-box;
  user-select: none;
  padding: 10px;
`;

const ArrowImg = styled.img`
  margin-left: 10%;
`;

export const ArrowUp = styled(ArrowImg)`
  transform: rotateZ(-90deg);
`;

export const ArrowDown = styled(ArrowImg)`
  transform: rotateZ(90deg);
`;