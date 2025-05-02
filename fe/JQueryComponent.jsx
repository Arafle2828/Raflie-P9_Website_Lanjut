import React, { useState } from 'react';
import $ from 'jquery';

function JQueryComponent() {
  const [form, setForm] = useState({ nama: '', prodi: '' });
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    $.ajax({
      url: 'http://localhost:3000/submit',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(form),
      success: function (data) {
        setResponse(data.message);
      },
      error: function () {
        setResponse('Terjadi kesalahan saat mengirim data.');
      }
    });
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

export default JQueryComponent;
