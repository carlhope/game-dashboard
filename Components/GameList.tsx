import { useEffect, useState } from "react";
import { fetchGames } from "../Services/GameService";
import type { Game } from "../Types/Game";
import type {GameListProps} from "../Types/Search"

export default function GameList({ searchTerm }: GameListProps) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const result = await fetchGames(searchTerm);
        setGames(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unable to load games.");
        }
      }
      finally {
        setLoading(false);
      }
    };
    loadGames();
  }, [searchTerm]);

  if (loading) return <p className="text-center text-xl text-blue-600">Loading games...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6">
      {games.map((game) => (
        <div
          key={game.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={game.background_image}
            alt={game.name}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 truncate">{game.name}</h2>
            <p className="text-sm text-gray-500">Released: {game.released}</p>
            <p className="mt-2 text-sm text-green-600 font-medium">Rating: {game.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}



