const connection = require('../helpers/connect');

exports.getCategories = (req, res) => {
    connection.query('SELECT * FROM category', (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
}

exports.getAddOns = (req, res) => {
    connection.query('SELECT * FROM addon WHERE categoryId = ?', [req.params.id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
}