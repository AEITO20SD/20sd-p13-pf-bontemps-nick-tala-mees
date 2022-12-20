import { table } from "console";
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
            tableId: req.body.tableId,
            id: req.body.id,
            name: req.body.name,
            number: 1,
            price: req.body.price
        }
        array.push(newElement);
        return;
    } else if (array.length > 0) {
        for(let i = 0; i < array.length; i++) {
            if(array[i].name === req.body.name && array[i].tableId === req.body.tableId) {
                array[i].number = array[i].number + 1;
                return;
            } 
        } 
        console.log("else");
        const newElement = {
            tableId: req.body.tableId,
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
    const tableId = req.params.tableId;
    const tableArray = [] as any;

    for(let i = 0; i < array.length; i++) {
        if(array[i].tableId === tableId) {
            tableArray.push(array[i]);
        }
    }
    console.log(tableArray);
    res.status(200).send(tableArray);
}