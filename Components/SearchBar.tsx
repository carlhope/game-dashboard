import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (searchInput: string) => void }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex items-center gap-2">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search for a game..."
        className="border rounded px-3 py-2 w-full bg-yellow-500"
      />
      <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Search
      </button>
    </form>
  );
}
