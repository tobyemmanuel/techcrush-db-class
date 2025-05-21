import React, { useEffect, useState } from 'react';
import api from '../api/index';

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.get('/reviews').then(res => {
      setReviews(res.data.data);
    });
  }, []);

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(r => (
          <li key={r.id}>{r.content}</li>
        ))}
      </ul>
    </div>
  );
}
