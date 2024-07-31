import { searchArtworks } from '@api/searchArtworks.ts';
import SmallCard from '@ui/SmallCard/smallCard.tsx';
import { useDebounce } from '@hooks/useDebounce.ts';
import { Artwork } from '@type/types.ts';
import { sortResults } from '@utils/sortUtils/sortUtils.ts';
<<<<<<< Updated upstream
import { searchSchema } from '@utils/validationSchema/validationSchema.ts';
import React, { ChangeEvent, useState } from 'react';
import * as yup from 'yup';
=======
import {ChangeEvent, useState} from 'react';
>>>>>>> Stashed changes
import {
  ErrorMessage,
  Heading,
  Highlight,
  Input, MarginRight,
  Results,
  SearchBox,
  SearchIcon,
  SortBox,
  Wrapper,
} from './searchForm.styles.ts';
import SortButton from '@ui/SortButton/sortButton.tsx';
import SmallCardsLoader from "@ui/SkeletonLoader/SmallCardsLoader.tsx";
import { SEARCH_ITEMS } from "@constants/constants.ts";

const SearchForm = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Artwork[]>([]);
  const [error, setError] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const debouncedQuery = useDebounce(query, 500);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
    setResults((prevResults) => sortResults(sort, prevResults));
  };

  const handleSearch = async () => {
    if (debouncedQuery.trim() === '') {
      setError('Query cannot be empty.');
      setResults([]);
      return;
    }

    try {
      await searchSchema.validate(debouncedQuery);
      setError('');
      setLoading(true);
      const artworks = await searchArtworks(debouncedQuery);
      const sortedArtworks = sortResults(sortOption, artworks);
      setResults(sortedArtworks);
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
  };

  return (
    <Wrapper>
      <Heading>
        Let's Find Some <Highlight>Art</Highlight> <br /> Here!
      </Heading>
      <SearchBox>
        <Input placeholder="Search art, artist, work..." value={query} onChange={handleInputChange} />
        <SearchIcon src="search.png" alt="search" onClick={handleSearch} />
      </SearchBox>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {results.length > 0 && (
        <SortBox>
          <MarginRight>
          <SortButton title={"Date"}
                      downArrowSort={"dateDesc"}
                      upArrowSort={"date"}
                      onSwitch={handleSortChange}
                      currentSort={sortOption}
          />
          </MarginRight>
          <SortButton title={"Title"}
                      downArrowSort={"titleDesc"}
                      upArrowSort={"title"}
                      onSwitch={handleSortChange}
                      currentSort={sortOption}
          />
        </SortBox>
      )}
      <Results>
        {loading && <SmallCardsLoader itemsCount={SEARCH_ITEMS}/>}
        {results.map((artwork) => (
          <SmallCard key={artwork.id} artwork={artwork} />
        ))}
      </Results>
    </Wrapper>
  );
};

export default SearchForm;
