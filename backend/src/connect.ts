// Checks if the applaction is in production envirment or not
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// Import of required packages
const mysql = require('mysql2');

// Connection string for the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: 'bontemps',
    port: 3306
});

// Checks if the application is connected to the database
connection.connect(function(err: { message: string; }) {

    // If the application is not connected to the database or there is an error
    if (err) {
        return console.error('Error: ' + err.message);
    } else {
        console.log('Connected to the MySQL server.');
    }
});

// Eport the connection
module.exports = connection;