// pages/Home.tsx
import React from 'react';
import GameList from '../Components/GameList';

const Home: React.FC = () => {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">GameHub Dashboard</h1>
      <GameList />
    </main>
  );
};

export default Home;
