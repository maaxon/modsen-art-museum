import { ReactNode } from 'react';

export interface Artwork {
  id: number;
  title: string;
  artist_display: string;
  artist_title: string;
  image_id?: string | null;
  dimensions?: string;
  credit_line?: string;
  department_title?: string;
  is_public_domain: boolean;
  date: number;
}

export interface ArtContextProps {
  artworks: Artwork[];
  loading: boolean;
  error: string | null;
}

export interface ArtProviderProps {
  children: ReactNode;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface SmallCardProps {
  artwork: Artwork;
  onRemove?: (id: number) => void;
}

export interface TitleSectionProps {
  subtitle: string;
  title: string;
}

export interface BookmarkContextProps {
  bookmarks: Set<number>;
  addBookmark: (id: number) => void;
  removeBookmark: (id: number) => void;
}
