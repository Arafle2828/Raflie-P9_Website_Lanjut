const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); // ← koneksi ke database

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('fe'));

app.post('/submit', (req, res) => {
  const { nama, prodi } = req.body;
  const query = 'INSERT INTO mahasiswa (nama, prodi) VALUES (?, ?)';

  db.query(query, [nama, prodi], (err, result) => {
    if (err) {
      console.error('Gagal insert data:', err);
      return res.status(500).json({ message: 'Gagal simpan data' });
    }
    res.json({ message: `Halo ${nama}, prodi kamu adalah ${prodi}.` });
  });
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
