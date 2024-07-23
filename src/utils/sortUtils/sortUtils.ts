import { Artwork } from '@type/types.ts';

export const sortResults = (option: string, data: Artwork[]): Artwork[] => {
  const sortedData = [...data];
  if (option === 'date') {
    sortedData.sort((a, b) => (a.date > b.date ? 1 : -1));
  }
  if (option === 'dateDesc') {
    sortedData.sort((a, b) => (a.date < b.date ? 1 : -1));
  }
  if (option === 'title') {
    sortedData.sort((a, b) => a.title.localeCompare(b.title));
  }
  if (option === 'titleDesc'){
    sortedData.sort((a, b) => b.title.localeCompare(a.title));
  }
  return sortedData;
};
