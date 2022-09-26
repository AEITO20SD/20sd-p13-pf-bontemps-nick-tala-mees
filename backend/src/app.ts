// Import statments
import express from 'express';
import session from 'express-session';

// Declare a new express app instance
const app = express();
const connect = require('./helpers/connect');

// Setting up the session for the user login
app.use(session({
    secret: `${process.env.SESSION_SECRET}`,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    saveUninitialized: false
}));


// Middleware for parsing the body of a request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Adding route files
app.use('/users', require('./routes/authenticationRoutes'));

// Exoprts the app variable
module.exports = app;