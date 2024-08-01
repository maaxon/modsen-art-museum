import SmallCard from '@components/SmallCard';
import TitleSection from '@components/TitleSection';
import { OTHER_WORKS_ITEMS } from '@constants/constants.ts';
import useArtworks from '@hooks/useArtworks.ts';
import React, {memo, useState} from 'react';
import { Grid, Wrapper } from './otherWorks.styles.ts';
import {SmallCardsLoader} from "@components/SkeletonLoader";

const OtherWorks: React.FC = () => {
  const [currentPage] = useState(1);
  const { artworks, loading, error } = useArtworks(currentPage, OTHER_WORKS_ITEMS);

  const renderArtworks = () => {
    if (loading) return <SmallCardsLoader itemsCount={OTHER_WORKS_ITEMS}/>
    if (error) return <div>Error: {error}</div>;
    return artworks.map((artwork) => (
        <SmallCard key={artwork.id} artwork={artwork} />
    ));
  };

  return (
    <Wrapper>
      <TitleSection subtitle="Here some more" title="Other works for you" />
      <Grid>{renderArtworks()}</Grid>
    </Wrapper>
  );
};

export default memo(OtherWorks);
