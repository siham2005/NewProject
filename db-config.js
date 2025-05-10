
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Remplacez par votre utilisateur
  password: '', // Remplacez par votre mot de passe
  database: 'exam_platform'
});

connection.connect(error => {
  if (error) throw error;
  console.log('Connecté à la base de données MySQL');
});

module.exports = connection;