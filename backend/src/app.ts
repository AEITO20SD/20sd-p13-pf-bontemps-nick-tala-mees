// Import statments
import express from 'express';

// Declare a new express app instance
const app = express();

// Middleware for parsing the body of a request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

//  Routes
app.post('/', (req, res) => {
    console.log(req.body);
});

// Exoprts the app variable
module.exports = app;