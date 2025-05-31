import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',      // or your MySQL host
  user: 'root',      // DB username
  password: '',  // DB password
  database: 'kkopi_db',    // Your phpMyAdmin DB
});

export default pool;
