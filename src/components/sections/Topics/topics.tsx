import Pagination from '@ui/Pagination/pagination.tsx';
import TitleSection from '@ui/TitleSection/titleSection.tsx';
import useArtworks from '@hooks/useArtworks.ts';
import React, {  useState } from 'react';
import { Gallery, Wrapper } from './topics.styles.ts';
import CardsLoader from '@ui/SkeletonLoader/CardsLoader.tsx';
import TopicsCard from '@components/sections/Topics/topicsCard.tsx';


const Topics: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { artworks, totalItems, loading, error } = useArtworks(currentPage, 3);

  const totalPages = () => Math.ceil(totalItems / 3);

  const handlePageChange = (page: number) => setCurrentPage(page)

  const renderArtworks = () => {
    if (loading) return (<CardsLoader/>);
    if (error) return <div>{error}</div>;
    return artworks.map((artwork) => (
      <TopicsCard artwork={artwork} />
    ));
  };

  return (
    <Wrapper>
      <TitleSection subtitle="Topics for you" title="Our special gallery" />
      <Gallery>{renderArtworks()}</Gallery>
      <Pagination currentPage={currentPage} totalPages={totalPages()} onPageChange={handlePageChange} />
    </Wrapper>
  );
};

export default Topics;
