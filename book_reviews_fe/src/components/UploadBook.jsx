import React, { useState } from 'react';
import api from '../api/index';

export default function UploadBook() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const upload = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);

    await api.post('/reviews/upload-book', formData);
    alert('Uploaded!');
  };

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={upload}>Upload Book</button>
    </div>
  );
}
