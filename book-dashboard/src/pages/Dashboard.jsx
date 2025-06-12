
import React, { useEffect, useState } from "react";
import { getBooks } from "../services/bookService";
import BookTable from "../components/BookTable";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";
import BookForm from "../components/BookForm";

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const data = await getBooks();
    setBooks(data);
    setFilteredBooks(data);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📚 Book Dashboard</h1>
      <FilterBar books={books} setFilteredBooks={setFilteredBooks} />
      <BookTable
        books={filteredBooks}
        onEdit={setSelectedBook}
        refresh={fetchBooks}
      />
      <BookForm selectedBook={selectedBook} onClose={() => setSelectedBook(null)} refresh={fetchBooks} />
      <Pagination items={filteredBooks} />
    </div>
  );
}
