const mysql = require('mysql2/promise');

// Create MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'm2l',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Define SELECT query
const sql = 'SELECT * FROM register';

// Execute SELECT query
pool.query(sql)
  .then(([rows]) => {
    console.log(rows);
  })
  .catch((error) => {
    console.error(error);
  });