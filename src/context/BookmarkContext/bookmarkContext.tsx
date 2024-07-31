import {BookmarkContextProps} from '@type/types.ts';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {getBookmarks} from "@utils/bookmarksStorage/bookmarksStorage.ts";

const BookmarkContext = createContext<BookmarkContextProps | undefined>(undefined);

export const BookmarkProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
    const [bookmarks, setBookmarks] = useState<Set<number>>(new Set());

    useEffect(() => {
        const storedBookmarks = getBookmarks();
        setBookmarks(new Set(storedBookmarks));
    }, []);

    const addBookmark = (id: number) => {
        setBookmarks((prevBookmarks) => {
            const newBookmarks = new Set(prevBookmarks);
            newBookmarks.add(id);
            setBookmarks(newBookmarks)
            return newBookmarks;
        });
    };

    const removeBookmark = (id: number) => {
        setBookmarks((prevBookmarks) => {
            const newBookmarks = new Set(prevBookmarks);
            newBookmarks.delete(id);
            setBookmarks(newBookmarks)
            return newBookmarks;
        });
    };

    return (
        <BookmarkContext.Provider value={{bookmarks, addBookmark, removeBookmark}}>{children}</BookmarkContext.Provider>
    );
};

export const useBookmarks = () => {
    const context = useContext(BookmarkContext);
    if (context === undefined) {
        throw new Error('useBookmarks must be used within a BookmarkProvider');
    }
    return context;
};
