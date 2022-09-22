const express = require('express');

const app = express();

const port = process.env.PORT || 3080;

// Listening on port 3000
app.listen(port, () => {console.log('Listening on port ' + port)});