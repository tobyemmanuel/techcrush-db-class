import React, { useEffect, useState } from 'react';
import api from '../api/index';

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    fetchBooks();
  }, [q]);

  const fetchBooks = async () => {
    const res = await api.get(`/books?q=${q}`);
    setBooks(res.data.data);
  };

  return (
    <div>
      <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search books" />
      <ul>
        {books.map(book => <li key={book.id}>{book.title}</li>)}
      </ul>
    </div>
  );
}
