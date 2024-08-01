import SmallCard from '@components/SmallCard';
import { useDebounce } from '@hooks/useDebounce.ts';
import sortResults from '@utils/sortUtils';
import {ChangeEvent, memo, useState} from 'react';

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
import SortButton from '@components/SortButton/sortButton.tsx';
import {SmallCardsLoader} from "@components/SkeletonLoader";
import { SEARCH_ITEMS } from "@constants/constants.ts";
import {useSearch} from "@hooks/useSearch.ts";

const SearchForm = () => {
  const [query, setQuery] = useState<string>('');

  const [sortOption, setSortOption] = useState<string>('');


  const debouncedQuery = useDebounce(query, 500);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
  };

  const {results,error,loading} = useSearch(debouncedQuery);

  return (
    <Wrapper>
      <Heading>
        Let's Find Some <Highlight>Art</Highlight> <br /> Here!
      </Heading>
      <SearchBox>
        <Input placeholder="Search art, artist, work..." value={query} onChange={handleInputChange} />
        <SearchIcon src="search.png" alt="search" />
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
        {sortResults(sortOption,results).map((artwork) => (
          <SmallCard key={artwork.id} artwork={artwork} />
        ))}
      </Results>
    </Wrapper>
  );
};

export default memo(SearchForm);
