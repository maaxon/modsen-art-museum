import { useEffect, useState} from "react";
import {Artwork} from "@type/types.ts";
import {fetchFavoritesArtworks} from "@api/favoritesApi.ts";
import {useBookmarks} from "@context/BookmarkContext/bookmarkContext.tsx";

export const useFavorites = () =>{
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { bookmarks, removeBookmark } = useBookmarks();

    useEffect(() => {
        const getArtworks = async (ids: Set<number>) => {
            try {
                const artworks = await fetchFavoritesArtworks(Array.from(ids));
                setArtworks(artworks);
                setLoading(false);
            } catch (err) {
                const errorMessage = (err as Error).message;
                setError(errorMessage);
                setLoading(false);
            }
        }

        getArtworks(bookmarks);
    }, []);



    const handleRemove = (id: number) => {
        setArtworks((prevArtworks) => prevArtworks.filter((artwork) => artwork.id !== id));
        removeBookmark(id);
    }

    return {artworks,loading,error,handleRemove}
}