// Import statments
import express from 'express';

// Declare a new express app instance
const server = express();

// Sets the port to 3000
const port = process.env.PORT || 3080;

// Delcaring variablesx
const app = require('./src/app');

// Adding files to the server
server.use(app);

// Listening on port 3000
server.listen(port, () => {console.log('Listening on port ' + port)});