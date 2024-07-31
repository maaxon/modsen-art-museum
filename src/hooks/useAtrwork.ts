import {useEffect, useState} from "react";
import {Artwork} from "@type/types.ts";
import {API_URL_DETAIL} from "@constants/constants.ts";

export const useArtwork = (id : string | undefined) =>{
    const [artwork, setArtwork] = useState<Artwork | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (!id) {
            setError('Artwork ID is not provided');
            setLoading(false);
            return;
        }

        const fetchArtwork = async () => {
            try {
                const response = await fetch(API_URL_DETAIL(id));
                const data = await response.json();
                setArtwork(data.data);
            } catch (err) {
                setError('Failed to fetch artwork details');
            } finally {
                setLoading(false);
            }
        };
        fetchArtwork();
    }, [id]);

    return {artwork,loading,error}
}