import {BookmarkContextProps} from '@type/types.ts';
import React, {createContext, useCallback, useContext, useEffect, useState} from 'react';
import {getBookmarks,setBookmarks as setStorageBookmarks} from "@utils/bookmarksStorage/";

const BookmarkContext = createContext<BookmarkContextProps | undefined>(undefined);

export const BookmarkProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
    const [bookmarks, setBookmarks] = useState<Set<number>>(new Set());

    useEffect(() => {
        const storedBookmarks = getBookmarks();
        setBookmarks(new Set(storedBookmarks));
    }, []);

    const addBookmark = useCallback((id: number) => {
        setBookmarks((prevBookmarks) => {
            const newBookmarks = new Set(prevBookmarks);
            newBookmarks.add(id);
            setStorageBookmarks(newBookmarks)
            return newBookmarks;
        });
    },[setBookmarks]);

    const removeBookmark = useCallback( (id: number) => {
        setBookmarks((prevBookmarks) => {
            const newBookmarks = new Set(prevBookmarks);
            newBookmarks.delete(id);
            setStorageBookmarks(newBookmarks)
            return newBookmarks;
        });
    },[setBookmarks]);

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
