import React, { useState } from 'react';
import GameList from '../Components/GameList';
import SearchBar from '../Components/SearchBar';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">GameHub Dashboard</h1>
      <SearchBar onSearch={(query) => setSearchTerm(query)} />
      <GameList searchTerm={searchTerm} />
    </main>
  );
};

export default Home;

