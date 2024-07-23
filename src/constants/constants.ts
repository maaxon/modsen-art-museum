export const API_URL =
  'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,artist_title,image_id,dimensions,credit_line,department_title,is_public_domain,date';
export const INITIAL_PAGE_INDEX = 1;
export const ITEMS_PER_PAGE = 3;
export const MAX_VISIBLE_PAGES = 3;
export const OTHER_WORKS_ITEMS = 9;
export const BOOKMARKS_LOCAL_KEY = 'bookmarks';
export const sortOptions = [
  { value: '', label: 'None' },
  { value: 'date', label: 'Date' },
  { value: 'title', label: 'Title' },
];

export const BASE_URL = 'https://www.artic.edu/iiif/2';
export const DETAIL_PATH = '/detail';

export const IMAGE_URL = (image_id: string) => `${BASE_URL}/${image_id}/full/843,/0/default.jpg`;

export const API_URL_DETAIL = (id: string) => `https://api.artic.edu/api/v1/artworks/${id}`;

export const API_BASE_URL = 'https://api.artic.edu/api/v1';
export const ARTWORK_ENDPOINT = '/artworks/';
export const SEARCH_ENDPOINT = '/artworks/search';
