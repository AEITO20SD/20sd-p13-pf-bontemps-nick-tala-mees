// Import statments
import express from 'express';
import session from 'express-session';

// Declare a new express app instance
const app = express();
const connect = require('./helpers/connect');
const cors = require('cors');

// Middleware for parsing the body of a request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(cors());

// Exoprts the app variable
module.exports = app;