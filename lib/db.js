import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',      
  password: '',  
  database: 'kkopi_db',   
});

export default pool;
