import {BOOKMARKS_LOCAL_KEY} from "@constants/constants.ts";

export const setBookmarks = (bookmarks : Set<number>) => {
    localStorage.setItem(BOOKMARKS_LOCAL_KEY, JSON.stringify(Array.from(bookmarks)))
}

export const getBookmarks = () => {
    return JSON.parse(localStorage.getItem(BOOKMARKS_LOCAL_KEY) || '[]')
}