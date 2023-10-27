const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

// Define database module
const database = {
  async getUsers() {
    const sql = 'SELECT id, username, email FROM register';
    const [rows] = await pool.query(sql);
    return rows;
  },
  async addUser(username, email, password) {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const sql = 'INSERT INTO register (username, email, password) VALUES (?, ?, ?)';
    const [result] = await pool.query(sql, [username, email, hashedPassword]);
    return result.insertId;
  },
};
module.exports = database;