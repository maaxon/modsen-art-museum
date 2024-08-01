import Pagination from '@components/Pagination';
import TitleSection from '@components/TitleSection';
import useArtworks from '@hooks/useArtworks.ts';
import {memo, useState} from 'react';
import { Gallery, Wrapper } from './topics.styles.ts';
import {CardsLoader} from '@components/SkeletonLoader';
import TopicsCard from '@components/Topics/topicsCard.tsx';


const Topics = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { artworks, totalItems, loading, error } = useArtworks(currentPage, 3);

  const totalPages = () => Math.ceil(totalItems / 3);

  const handlePageChange = (page: number) => setCurrentPage(page)

  const renderArtworks = () => {
    if (loading) return (<CardsLoader/>);
    if (error) return <div>{error}</div>;
    return artworks.map((artwork) => (
      <TopicsCard artwork={artwork} key={artwork.id} />
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

export default memo(Topics);
