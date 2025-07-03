// services/gameService.ts
import type { Game } from '../Types/Game';

export const fetchGames = async (): Promise<Game[]> => {
  const response = await fetch("http://localhost:3001/games?search=elden%20ring");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.results;
};
