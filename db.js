// db.js
const mysql = require('mysql2');

// Buat koneksi ke database
const connection = mysql.createConnection({
  host: 'localhost',       // atau IP database
  user: 'root',            // ganti dengan user DB kamu
  password: '',            // ganti dengan password DB kamu
  database: 'db_mahasiswa' // ganti dengan nama database kamu
});

// Cek koneksi
connection.connect((err) => {
  if (err) {
    console.error('Gagal konek ke database:', err.message);
  } else {
    console.log('Tersambung ke database MySQL');
  }
});

module.exports = connection;
