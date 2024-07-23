import React from 'react';
import { Skeleton } from '@ui/SkeletonLoader/SkeletonLoader.style.ts';

const CardsLoader: React.FC = () => {
  return(
    <>
      <Skeleton width={"100%"} height={"32.125rem"}/>
      <Skeleton width={"100%"} height={"32.125rem"}/>
      <Skeleton width={"100%"} height={"32.125rem"}/>
    </>
  )
}

export default CardsLoader