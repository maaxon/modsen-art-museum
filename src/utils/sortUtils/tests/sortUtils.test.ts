import { Artwork } from '@type/types.ts';
import { sortResults } from '../sortUtils.ts';

describe('sortResults', () => {
  const artworks: Artwork[] = [
    {
      id: 1,
      title: 'Mona Lisa',
      artist_display: 'Leonardo da Vinci',
      artist_title: 'Leonardo da Vinci',
      image_id: 'image1',
      is_public_domain: true,
      date_start: 1503,
      date:1500
    },
    {
      id: 2,
      title: 'Starry Night',
      artist_display: 'Vincent van Gogh',
      artist_title: 'Vincent van Gogh',
      image_id: 'image2',
      is_public_domain: true,
      date_start: 1931,
      date:1500
    },
    {
      id: 3,
      title: 'The Persistence of Memory',
      artist_display: 'Salvador Dalí',
      artist_title: 'Salvador Dalí',
      image_id: 'image3',
      is_public_domain: true,
      date_start: 1889,
      date:1500
    },
  ];

  test('sorts by date', () => {
    const sortedByDate = sortResults('date', artworks);
    expect(sortedByDate).toEqual([
      {
        id: 1,
        title: 'Mona Lisa',
        artist_display: 'Leonardo da Vinci',
        artist_title: 'Leonardo da Vinci',
        image_id: 'image1',
        is_public_domain: true,
        date_start: 1503,
        date:1500
      },
      {
        id: 3,
        title: 'The Persistence of Memory',
        artist_display: 'Salvador Dalí',
        artist_title: 'Salvador Dalí',
        image_id: 'image3',
        is_public_domain: true,
        date_start: 1889,
        date:1500
      },
      {
        id: 2,
        title: 'Starry Night',
        artist_display: 'Vincent van Gogh',
        artist_title: 'Vincent van Gogh',
        image_id: 'image2',
        is_public_domain: true,
        date_start: 1931,
        date:1500
      },
    ]);
  });

  test('sorts by date desc', () => {
    const sortedByDate = sortResults('dateDesc', artworks);
    expect(sortedByDate).toEqual([
      {
        id: 2,
        title: 'Starry Night',
        artist_display: 'Vincent van Gogh',
        artist_title: 'Vincent van Gogh',
        image_id: 'image2',
        is_public_domain: true,
        date_start: 1931,
        date:1500
      },
      {
        id: 3,
        title: 'The Persistence of Memory',
        artist_display: 'Salvador Dalí',
        artist_title: 'Salvador Dalí',
        image_id: 'image3',
        is_public_domain: true,
        date_start: 1889,
        date:1500
      },
      {
        id: 1,
        title: 'Mona Lisa',
        artist_display: 'Leonardo da Vinci',
        artist_title: 'Leonardo da Vinci',
        image_id: 'image1',
        is_public_domain: true,
        date_start: 1503,
        date:1500
      },

    ]);
  });

  test('sorts by title', () => {
    const sortedByDate = sortResults('title', artworks);
    expect(sortedByDate).toEqual([
      {
        id: 1,
        title: 'Mona Lisa',
        artist_display: 'Leonardo da Vinci',
        artist_title: 'Leonardo da Vinci',
        image_id: 'image1',
        is_public_domain: true,
        date_start: 1503,
        date:1500
      },
      {
        id: 2,
        title: 'Starry Night',
        artist_display: 'Vincent van Gogh',
        artist_title: 'Vincent van Gogh',
        image_id: 'image2',
        is_public_domain: true,
        date_start: 1931,
        date:1500
      },
      {
        id: 3,
        title: 'The Persistence of Memory',
        artist_display: 'Salvador Dalí',
        artist_title: 'Salvador Dalí',
        image_id: 'image3',
        is_public_domain: true,
        date_start: 1889,
        date:1500
      },
    ]);
  });

  test('sorts by title desc', () => {
    const sortedByDate = sortResults('titleDesc', artworks);
    expect(sortedByDate).toEqual([
      {
        id: 3,
        title: 'The Persistence of Memory',
        artist_display: 'Salvador Dalí',
        artist_title: 'Salvador Dalí',
        image_id: 'image3',
        is_public_domain: true,
        date_start: 1889,
        date:1500
      },
      {
        id: 2,
        title: 'Starry Night',
        artist_display: 'Vincent van Gogh',
        artist_title: 'Vincent van Gogh',
        image_id: 'image2',
        is_public_domain: true,
        date_start: 1931,
        date:1500
      },
      {
        id: 1,
        title: 'Mona Lisa',
        artist_display: 'Leonardo da Vinci',
        artist_title: 'Leonardo da Vinci',
        image_id: 'image1',
        is_public_domain: true,
        date_start: 1503,
        date:1500
      },
    ]);
  });
});
