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
// ...

// Exemple d'utilisation dans la fonction de connexion
const user = await database.getUserByEmail(email);
if (!user) {
  // Utilisateur non trouvé
  return false;
}

const passwordMatch = await database.checkPassword(password, user.password);
if (!passwordMatch) {
  // Le mot de passe ne correspond pas
  return false;
}

// Connexion réussie
return true;

module.exports = database;