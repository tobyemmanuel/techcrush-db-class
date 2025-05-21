import React, { useEffect } from 'react';
import BookList from '../components/bookList';
import UploadBook from '../components/UploadBook';
import ReviewList from '../components/ReviewList';
import { connectSocket } from '../websocket/socket';

export default function Home() {
  useEffect(() => {
    connectSocket((data) => {
      if (data.event === 'BOOK_CREATED') {
        alert('New book added: ' + data.data.title);
      }
    });
  }, []);

  return (
    <div>
      <h1>Library Portal</h1>
      <UploadBook />
      <BookList />
      <ReviewList />
    </div>
  );
}
