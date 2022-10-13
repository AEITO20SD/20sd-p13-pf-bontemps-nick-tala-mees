// Import statments
import mysql from 'mysql2';

// Adding Env variables
require('dotenv').config();

// Connection info
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: 'bontemps'
});

// Connects with database
connection.connect(function(err) {
    if (err) {
        return console.error('Error: ' + err.message);
    } else {
        console.log('Connected to the MySQL server.');
    }
});

module.exports = connection;
