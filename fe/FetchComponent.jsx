import React, { useState } from 'react';

function FetchComponent() {
  const [form, setForm] = useState({ nama: '', prodi: '' });
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setResponse(data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nama" placeholder="Nama" onChange={handleChange} required />
      <input name="prodi" placeholder="Prodi" onChange={handleChange} required />
      <button type="submit">Kirim</button>
      <div>{response}</div>
    </form>
  );
}

export default FetchComponent;
