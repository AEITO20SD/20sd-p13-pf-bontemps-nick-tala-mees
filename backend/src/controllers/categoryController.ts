const connection = require('../helpers/connect');

exports.getCategories = (req, res) => {
    console.log('getCategories');
    connection.query('SELECT * FROM category', (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
}