import { useEffect, useState} from "react";
import {Artwork} from "@type/types.ts";
import {fetchFavoritesArtworks} from "@api/favoritesApi.ts";

export const useFavorites = () =>{
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');

        const getArtworks = async (ids: number[]) => {
            try {
                const artworks = await fetchFavoritesArtworks(ids);
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

        const updatedBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]').filter(
            (bookmarkId: number) => bookmarkId !== id,
        );
        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    }

    return {artworks,loading,error,handleRemove}
}