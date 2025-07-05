import type {Game} from '../Types/Game';

export const fetchGames = async (searchTerm?: string): Promise<Game[]> => {
  const query = searchTerm ? `?search=${encodeURIComponent(searchTerm)}` : '';
  const response = await fetch(`http://localhost:3001/games${query}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.results;
};
