`const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root',
  password: '', // Mot de passe vide par défaut dans XAMPP
  database: 'exam_platform',
  port: 3306, // Ajouter explicitement le port
  connectTimeout: 10000 // Augmenter le timeout
});

// Ajouter la gestion d'erreur immédiate
db.connect(err => {
  if (err) {
    console.error('❌ Erreur MySQL:', err.code, err.message);
    console.log('Vérifiez que:');
    console.log('1. MySQL est démarré dans XAMPP');
    console.log('2. Le port 3306 n\'est pas bloqué');
    console.log('3. La base exam_platform existe');
  } else {
    console.log('✅ Connecté à MySQL');
  }
});

module.exports = db;`
// siham_project/config/db.js
const mysql = require('mysql2/promise');
require('dotenv').config();

// create a pool to share connections
const pool = mysql.createPool({
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  user:     process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
