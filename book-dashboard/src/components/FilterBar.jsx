
import React, { useState } from "react";

export default function FilterBar({ books, setFilteredBooks }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setFilteredBooks(
      books.filter(
        (b) =>
          b.title.toLowerCase().includes(query.toLowerCase()) ||
          b.author.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Search by title or author"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-1"
      />
      <button onClick={handleSearch} className="bg-gray-300 px-3 py-1">Search</button>
    </div>
  );
}
