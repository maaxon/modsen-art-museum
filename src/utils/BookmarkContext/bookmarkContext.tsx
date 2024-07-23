import { BOOKMARKS_LOCAL_KEY } from '@constants/constants.ts';
import { BookmarkContextProps } from '@type/types.ts';
import React, { createContext, useContext, useEffect, useState } from 'react';

const BookmarkContext = createContext<BookmarkContextProps | undefined>(undefined);

export const BookmarkProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<Set<number>>(new Set());

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_LOCAL_KEY) || '[]');
    setBookmarks(new Set(storedBookmarks));
  }, []);

  const addBookmark = (id: number) => {
    setBookmarks((prevBookmarks) => {
      const newBookmarks = new Set(prevBookmarks);
      newBookmarks.add(id);
      localStorage.setItem(BOOKMARKS_LOCAL_KEY, JSON.stringify(Array.from(newBookmarks)));
      return newBookmarks;
    });
  };

  const removeBookmark = (id: number) => {
    setBookmarks((prevBookmarks) => {
      const newBookmarks = new Set(prevBookmarks);
      newBookmarks.delete(id);
      localStorage.setItem(BOOKMARKS_LOCAL_KEY, JSON.stringify(Array.from(newBookmarks)));
      return newBookmarks;
    });
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>{children}</BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};
