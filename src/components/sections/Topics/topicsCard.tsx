import { DETAIL_PATH, IMAGE_URL } from '@constants/constants';
import { Artwork } from '../../../../../modsen-art-museum-main/src/types/types.ts';
import React, { memo, useCallback, useMemo } from 'react';
import {
  Card,
  CardAuthor,
  CardContent,
  CardFooter,
  CardStatus,
  CardTitle,
  Image,
  ImagePlaceholder,
} from './topics.styles.ts';
import BookmarkButton from '@ui/BookmarkButton/bookmarkButton.tsx';

interface TopicsCardProps {
  artwork: Artwork;
}

const TopicsCard: React.FC<TopicsCardProps> = ({ artwork }) => {
  const imageUrl = useMemo(() => {
    return artwork.image_id ? IMAGE_URL(artwork.image_id) : null;
  }, [artwork.image_id]);

  const bookmarkButtonMemo = useCallback(() => <BookmarkButton id={artwork.id} />, [artwork.id]);

  return (
    <Card to={`${DETAIL_PATH}/${artwork.id}`}>
      <ImagePlaceholder>{imageUrl ? <Image src={imageUrl} alt={artwork.title} /> : "No Image"}</ImagePlaceholder>
      <CardContent>
        <CardTitle>{artwork.title}</CardTitle>
        <CardAuthor>{artwork.artist_title}</CardAuthor>
        <CardFooter>
          <CardStatus>{artwork.is_public_domain ? <strong>Public</strong> : <strong>Private</strong>}</CardStatus>
          {bookmarkButtonMemo()}
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default memo(TopicsCard);
