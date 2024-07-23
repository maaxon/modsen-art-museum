import Spinner from '@components/ui/Spinner/spinner';
import { API_URL_DETAIL, IMAGE_URL } from '@constants/constants';
import { Artwork } from '@type/types';
import React, { Suspense, lazy, memo, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  AddToFav,
  Author,
  Date,
  Content,
  Image,
  ImagePlaceholder,
  InfoItem,
  InfoList,
  Mock,
  Overview,
  SectionTitle,
  Title,
  Wrapper,
} from './detail.styles';
import SpinnerBig from '@ui/Spinner/spinnerBig.tsx';

const BookmarkButton = lazy(() => import('@components/ui/BookmarkButton/bookmarkButton'));

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!id) {
      setError('Artwork ID is not provided');
      setLoading(false);
      return;
    }

    const fetchArtwork = async () => {
      try {
        const response = await fetch(API_URL_DETAIL(id));
        const data = await response.json();
        setArtwork(data.data);
      } catch (err) {
        setError('Failed to fetch artwork details');
      } finally {
        setLoading(false);
      }
    };
    fetchArtwork();
  }, [id]);

  const renderContent = useMemo(() => {
    if (!id) return <div>Artwork ID is not provided</div>; // Вывод сообщения, если id не определен
    if (loading) return <SpinnerBig />;
    if (error) return <div>{error}</div>;
    if (!artwork) return <SpinnerBig />;

    return (
      <Wrapper>

        <ImagePlaceholder>
          {artwork.image_id ? (
            <Image src={IMAGE_URL(artwork.image_id)} alt={artwork.title} />
          ) : (
            <Mock>
              <div>No Image</div>
            </Mock>
          )}
          <AddToFav>
            <Suspense fallback={<Spinner />}>
              <BookmarkButton id={artwork.id} />
            </Suspense>
          </AddToFav>
        </ImagePlaceholder>
        <Content>
          <div>
            <Title>{artwork.title}</Title>
            <Author>{artwork.artist_title}</Author>
            <Date>1535-45</Date>
          </div>
          <Overview>
            <SectionTitle>Overview</SectionTitle>
            <InfoList>
              <InfoItem>
                <strong>Artist nationality:</strong> {artwork.artist_display}
              </InfoItem>
              <InfoItem>
                <strong>Dimensions:</strong> Sheet: {artwork.dimensions}
              </InfoItem>
              <InfoItem>
                <strong>Credit Line:</strong> {artwork.credit_line}
              </InfoItem>
              <InfoItem>
                <strong>Repository:</strong> {artwork.department_title}
              </InfoItem>
              <InfoItem>{artwork.is_public_domain ? <b>Public</b> : <b>Private</b>}</InfoItem>
            </InfoList>
          </Overview>
        </Content>

      </Wrapper>
    );
  }, [loading, error, artwork, id]);

  return renderContent;
};

export default memo(Detail);
