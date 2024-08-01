import { API_BASE_URL, SEARCH_ENDPOINT } from '@constants/constants.ts';
import { Artwork } from '@type/types.ts';

export const searchArtworks = async (query: string): Promise<Artwork[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}${SEARCH_ENDPOINT}?q=${encodeURIComponent(
        query,
      )}&fields=id,title,image_id,artist_display,is_public_domain,date_start`,
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
