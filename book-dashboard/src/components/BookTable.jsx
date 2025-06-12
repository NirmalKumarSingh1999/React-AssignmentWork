
import React from "react";
import { deleteBook } from "../services/bookService";

export default function BookTable({ books, onEdit, refresh }) {
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      await deleteBook(id);
      refresh();
      alert("Book deleted");
    }
  };

  return (
    <table className="table-auto w-full border">
      <thead>
        <tr>
          <th>Title</th><th>Author</th><th>Genre</th><th>Year</th><th>Status</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td><td>{book.author}</td><td>{book.genre}</td><td>{book.year}</td><td>{book.status}</td>
            <td>
              <button onClick={() => onEdit(book)}>✏️</button>
              <button onClick={() => handleDelete(book.id)}>🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
