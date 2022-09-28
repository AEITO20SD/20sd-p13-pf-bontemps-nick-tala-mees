// Import statments
import express from 'express';


const controller = require('../controllers/authenticationController');

// Declare a new express app instance
const authentication = express();

// Register Routes
authentication.post('/register', controller.registerUser);

authentication.get('/register/verify/:userId/:uniqueString', controller.verifyUser);

// Login Routes
authentication.post('/login', controller.loginUser);

// Password Reset Routes
authentication.post('/login/reset-password', controller.resetPasswordEmailUser);

authentication.get('/login/reset-password/:userId/:uniqueString', controller.resetPasswordUserGet);

module.exports = authentication;