import Spinner from '@components/Spinner/spinner';
import { IMAGE_URL } from '@constants/constants';
import { Suspense } from 'react';

import { useParams } from 'react-router-dom';
import {
  AddToFav,
  Content,
  Image,
  ImagePlaceholder,
  Mock,
  Wrapper,
} from './detail.styles';
import SpinnerBig from '@components/Spinner/spinnerBig.tsx';
import BookmarkButton from "@components/BookmarkButton/bookmarkButton.tsx";
import {useArtwork} from "@hooks/useAtrwork.ts";
import {ArtworkInfo} from "@components/ArtworkInfo/ArtworkInfo.tsx";



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
          <ArtworkInfo artwork={artwork}/>
        </Content>

      </Wrapper>
    );



};

export default Detail;
