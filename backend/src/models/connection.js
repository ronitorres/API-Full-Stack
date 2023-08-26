const mysql = require('mysql2/promise');

require('dotenv').config();                                                          // Importado o dotenv para funcionar o servidor reconhecer as credenciais.

const connection = mysql.createPool(
  {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  }
);








module.exports  = connection;
