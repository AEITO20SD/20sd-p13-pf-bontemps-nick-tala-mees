// Import statments
import express from 'express';

// Declare a new express app instance
const authentication = express();

//  Routes
authentication.post('/register', (req, res) => {
    console.log(req.body);
});

module.exports = authentication;