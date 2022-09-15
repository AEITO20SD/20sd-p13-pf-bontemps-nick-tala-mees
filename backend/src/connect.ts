// required packages
require('dotenv').config();
const mysql = require('mysql');

// connection info
const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: 'bontemps'
});

// connect with database
connection.connect(function(err) {
    if (err) {
        return console.error('Error: ' + err.message);
    } else {
        console.log('Connected to the MySQL server.');
    }
});