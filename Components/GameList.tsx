
import React, { useEffect, useState } from 'react';
import { fetchGames } from '../Services/GameService';
import type { Game } from '../Types/Game';

const GameList: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchGames()
      .then(setGames)
      .catch((err) => console.error('Fetch error:', err.message));
  }, []);

  return (
    <>
    <h1>Game component</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {games.map((game) => (
        <div key={game.id} className="border rounded p-2">
          <img src={game.background_image} alt={game.name} className="w-full h-48 object-cover" />
          <h3 className="font-bold mt-2">{game.name}</h3>
          <p>Released: {game.released}</p>
          <p>Rating: {game.rating}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default GameList;
