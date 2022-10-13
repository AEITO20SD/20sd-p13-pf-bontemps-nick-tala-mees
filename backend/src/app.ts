// Import statments
import express from 'express';
import session from 'express-session';

// Declare a new express app instance
const app = express();
const connect = require('./helpers/connect');
const cors = require('cors');

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
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

var corsOptions = {
    origin: 'http://localhost:4200/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors());

// Adding route files
app.use('/users', require('./routes/authenticationRoutes'));
app.use('/categories', require('./routes/categoryRoutes'));

// Exoprts the app variable
module.exports = app;