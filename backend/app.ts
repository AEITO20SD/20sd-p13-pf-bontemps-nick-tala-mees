const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const encoder = bodyParser.json();
const port = process.env.PORT || 3080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.post('/', (req, res) => {
    console.log(req.body);
});

// Listening on port 3000
app.listen(port, () => {console.log('Listening on port ' + port)});