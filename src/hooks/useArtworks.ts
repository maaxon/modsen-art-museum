import { API_URL } from '@constants/constants';
import { Artwork } from '@type/types';
import { useEffect, useState } from 'react';

const useArtworks = (currentPage: number, itemsPerPage: number) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}&page=${currentPage}&limit=${itemsPerPage}`);
        const data = await response.json();
        setArtworks(data.data);
        setTotalItems(data.pagination.total);
      } catch (err) {
        setError('Failed to fetch artworks');
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, [currentPage, itemsPerPage]);

  return { artworks, totalItems, loading, error };
};

export default useArtworks;
