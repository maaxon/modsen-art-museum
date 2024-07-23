import { DETAIL_PATH, IMAGE_URL } from '@constants/constants';
import { SmallCardProps } from '../../../../../modsen-art-museum-main/src/types/types.ts';
import React, { lazy, memo, useCallback, useMemo } from 'react';
import { Author, Card, Image, ImagePlaceholder, Info, Status, Title } from './smallCard.styles.ts';
import { textLengthLimiter } from '../../../../../modsen-art-museum-main/src/utils/textLenghtLimiter/textLengthLimiter.ts';
import noImage from '../../../../../modsen-art-museum-main/src/assets/images/noImage.png'

const BookmarkButton = lazy(() => import('../BookmarkButton/bookmarkButton.tsx'));

const SmallCard: React.FC<SmallCardProps> = memo(({ artwork, onRemove }) => {
  const { id, title, artist_display, is_public_domain, image_id } = artwork;

  const imageUrl = useMemo(() => (image_id ? IMAGE_URL(image_id) : null), [image_id]);

  const handleRemove = useCallback(() => {
    if (onRemove) {
      onRemove(id);
    }
  }, [onRemove, id]);

  return (
    <Card to={`${DETAIL_PATH}/${id}`} data-testid="favorites-link">
      <ImagePlaceholder>{imageUrl ? <Image src={imageUrl} alt={'img_card'} /> : <Image src={noImage} alt={'no_img'}/>}</ImagePlaceholder>
      <Info>
        <Title>{textLengthLimiter(title,40)}</Title>
        <Author>{textLengthLimiter(artist_display,30)}</Author>
        <Status>{is_public_domain ? <strong>Public</strong> : <strong>Private</strong>}</Status>
      </Info>
      <React.Suspense fallback={<div>Loading...</div>}>
        <BookmarkButton id={id} onRemove={handleRemove} />
      </React.Suspense>
    </Card>
  );
});

export default SmallCard;