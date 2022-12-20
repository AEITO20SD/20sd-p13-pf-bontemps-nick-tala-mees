import { forEachChild } from "typescript";

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

const array = [] as any;
exports.storeAddOns = (req, res) => {

    if(array.length === 0) {
        const newElement = {
            id: req.body.id,
            name: req.body.name,
            number: 1,
            price: req.body.price
        }
        array.push(newElement);
        return;
    } else if (array.length > 0) {
        for(let i = 0; i < array.length; i++) {
            if(array[i].name === req.body.name) {
                array[i].number = array[i].number + 1;
                return;
            } 
        } 
        console.log("else");
        const newElement = {
            id: req.body.id,
            name: req.body.name,
            number: 1,
            price: req.body.price
        }
        array.push(newElement);
        return;
    }
}

exports.getStoredAddOns = (req, res) => {
    console.log(array, "array");
    res.status(200).send(array);
}