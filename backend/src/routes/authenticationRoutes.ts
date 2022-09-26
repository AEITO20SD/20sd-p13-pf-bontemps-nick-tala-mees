// Import statments
import express from 'express';


const controller = require('../controllers/authenticationController');

// Declare a new express app instance
const authentication = express();

//  Routes
authentication.post('/register', controller.registerUser);

authentication.get('/register/verify/:userId/:uniqueString', controller.verifyUser);

authentication.post('/login', controller.loginUser);

module.exports = authentication;