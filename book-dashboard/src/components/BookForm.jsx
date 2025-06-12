
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { addBook, updateBook } from "../services/bookService";

export default function BookForm({ selectedBook, onClose, refresh }) {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (selectedBook) reset(selectedBook);
  }, [selectedBook]);

  const onSubmit = async (data) => {
    if (selectedBook) {
      await updateBook(selectedBook.id, data);
      alert("Book updated");
    } else {
      await addBook(data);
      alert("Book added");
    }
    reset();
    refresh();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 p-4 border mt-4">
      <input {...register("title", { required: true })} placeholder="Title" />
      <input {...register("author", { required: true })} placeholder="Author" />
      <input {...register("genre", { required: true })} placeholder="Genre" />
      <input type="number" {...register("year", { required: true })} placeholder="Year" />
      <select {...register("status")}>
        <option value="Available">Available</option>
        <option value="Issued">Issued</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-1">Submit</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
}
