import { Artwork } from '@type/types.ts';

export const sortResults = (option: string, data: Artwork[]): Artwork[] => {
  const sortedData = [...data];
  if (option === 'date') {
    sortedData.sort((a, b) => {
      if (a.date_start && b.date_start) return (a.date_start > b.date_start ? 1 : -1)
      else return 1
    });
  }
  if (option === 'dateDesc') {
    sortedData.sort((a, b) => {
      if (a.date_start && b.date_start) return (a.date_start < b.date_start ? 1 : -1)
      else return 1
    });
  }
  if (option === 'title') {
    sortedData.sort((a, b) => a.title.localeCompare(b.title));
  }
  if (option === 'titleDesc'){
    sortedData.sort((a, b) => b.title.localeCompare(a.title));
  }
  return sortedData;
};
