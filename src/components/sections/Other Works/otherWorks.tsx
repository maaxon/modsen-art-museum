import SmallCard from '@ui/SmallCard/smallCard.tsx';
import Spinner from '@ui/Spinner/spinner.tsx';
import TitleSection from '@ui/TitleSection/titleSection.tsx';
import { OTHER_WORKS_ITEMS } from '@constants/constants.ts';
import useArtworks from '@hooks/useArtworks.ts';
import React, { useState } from 'react';
import { Grid, Wrapper } from './otherWorks.styles.ts';

const OtherWorks: React.FC = () => {
  const [currentPage] = useState(1);
  const { artworks, loading, error } = useArtworks(currentPage, OTHER_WORKS_ITEMS);

  const renderArtworks = () => {
    if (loading) return <Spinner />;
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

export default OtherWorks;
