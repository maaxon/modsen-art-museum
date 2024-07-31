import {searchSchema} from "@utils/validationSchema/validationSchema.ts";
import {searchArtworks} from "@api/searchArtworks.ts";
import * as yup from "yup";
import {useEffect, useState} from "react";
import {Artwork} from "@type/types.ts";

export const useSearch = (debouncedQuery: string) =>{
    const [results, setResults] = useState<Artwork[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(()=>{
        const search = async () =>{
            try {
                await searchSchema.validate(debouncedQuery);
                setError('');
                setLoading(true);
                const artworks = await searchArtworks(debouncedQuery);
                setResults(artworks);
            } catch (validationError) {
                if (validationError instanceof yup.ValidationError) {
                    setError(validationError.errors[0]);
                } else {
                    setError('Unexpected error');
                }
                setResults([]);
            } finally {
                setLoading(false);
            }
        }

        if(debouncedQuery) search();
    },[debouncedQuery])

    return {results, loading, error}
}