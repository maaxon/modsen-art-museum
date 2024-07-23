import { useBookmarks } from '../../../../../modsen-art-museum-main/src/utils/BookmarkContext/bookmarkContext.tsx';
import React, { useCallback, useEffect, useState } from 'react';
import { BookmarkIcon, Circle } from './bookmarkButton.styles.ts';

interface BookmarkButtonProps {
  id: number;
  onRemove?: (id: number) => void;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ id, onRemove }) => {
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    setIsBookmarked(bookmarks.has(id));
  }, [bookmarks, id]);

  const handleBookmark = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (isBookmarked) {
        removeBookmark(id);
        onRemove?.(id);
      } else {
        addBookmark(id);
      }
    },
    [id, isBookmarked, addBookmark, removeBookmark, onRemove],
  );

  return (
    <Circle onClick={handleBookmark}>
      <BookmarkIcon src={isBookmarked ? '/bookmarked.svg' : '/bookmark.svg'} alt="Bookmark" />
    </Circle>
  );
};

export default BookmarkButton;
