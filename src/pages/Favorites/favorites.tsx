import TitleSection from '@components/TitleSection';

import { Bookmark, Grid, Heading, Highlight } from './favorites.styles';
import SpinnerBig from '@components/Spinner';
import {useFavorites} from "@hooks/useFavorites.ts";
import SmallCard from "@components/SmallCard";



const Favorites = () => {
  const {artworks,loading,error,handleRemove} = useFavorites();

  if (loading) {
    return <SpinnerBig />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Heading>
        Here Are Your <br />
        <Highlight>
          <Bookmark src="bookmark.svg" alt="bookmark" />
          <div>Favorites</div>
        </Highlight>
        {artworks.length === 0 ?
            <TitleSection subtitle={'Saved by you'} title={'You have no favorite artworks yet.'} />
              :
            <TitleSection subtitle={'Saved by you'} title={'Your favorites list'} />
        }
      </Heading>

      <Grid>
        {artworks.map((artwork) => (
          <SmallCard key={artwork.id} artwork={artwork} onRemove={handleRemove} />
        ))}
      </Grid>
    </>
  );
};

export default Favorites;
