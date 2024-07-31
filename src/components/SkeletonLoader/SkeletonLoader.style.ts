import styled, { keyframes } from 'styled-components';

export const loading = keyframes`
  to {
    background-position-x: -20%;
  }
`;

export interface SkeletonLoaderProps{
  width:string,
  height:string
}

export const Skeleton = styled.div<SkeletonLoaderProps>`
  background-color:${({ theme }) => theme.colors.skeletonBackground};
  background: linear-gradient(
          100deg,
          rgba(255, 255, 255, 0) 40%,
          rgba(255, 255, 255, .5) 50%,
          rgba(255, 255, 255, 0) 60%
  ) var(--loading-grey);
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s ${loading} ease-in-out infinite;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;