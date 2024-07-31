import Spinner from '@components/Spinner/spinner';
import { IMAGE_URL } from '@constants/constants';
import { Suspense } from 'react';

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
import SpinnerBig from '@components/Spinner/spinnerBig.tsx';
import BookmarkButton from "@components/BookmarkButton/bookmarkButton.tsx";
import {useArtwork} from "@hooks/useAtrwork.ts";



const Detail = () => {
  const { id } = useParams<{ id: string }>();

  const {artwork,loading,error} = useArtwork(id);



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



};

export default Detail;
