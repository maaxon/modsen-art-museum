import { API_BASE_URL, ARTWORK_ENDPOINT } from '../../../modsen-art-museum-main/src/constants/constants.ts';
import { Artwork } from '../../../modsen-art-museum-main/src/types/types.ts';

export const fetchFavoritesArtworks = async (ids: number[]): Promise<Artwork[]> => {
  try {
    const promises = ids.map((id) =>
      fetch(`${API_BASE_URL}${ARTWORK_ENDPOINT}${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => data.data),
    );
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    throw new Error('Failed to fetch artworks');
  }
};
