import Pagination from '@ui/Pagination/pagination.tsx';
import TitleSection from '@ui/TitleSection/titleSection.tsx';
import useArtworks from '../../../../../modsen-art-museum-main/src/hooks/useArtworks.ts';
import React, {  memo, useCallback, useMemo, useState } from 'react';
import { Gallery, Wrapper } from './topics.styles.ts';
import CardsLoader from '@ui/SkeletonLoader/CardsLoader.tsx';
import TopicsCard from '@components/sections/Topics/topicsCard.tsx';


const Topics: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { artworks, totalItems, loading, error } = useArtworks(currentPage, 3);

  const totalPages = useMemo(() => Math.ceil(totalItems / 3), [totalItems]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const renderArtworks = useMemo(() => {
    if (loading) return (<CardsLoader/>);
    if (error) return <div>{error}</div>;
    return artworks.map((artwork) => (
      <TopicsCard artwork={artwork} />
    ));
  }, [loading, error, artworks]);

  return (
    <Wrapper>
      <TitleSection subtitle="Topics for you" title="Our special gallery" />
      <Gallery>{renderArtworks}</Gallery>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </Wrapper>
  );
};

export default memo(Topics);
