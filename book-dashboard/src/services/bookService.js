
const API_URL = "http://localhost:3000/books";

export const getBooks = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addBook = async (book) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  return res.json();
};

export const updateBook = async (id, book) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  return res.json();
};

export const deleteBook = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
