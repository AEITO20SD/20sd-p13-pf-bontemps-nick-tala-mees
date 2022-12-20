import express from 'express';

const category = express();

const controller = require('../controllers/categoryController');

category.get('/', controller.getCategories);

category.get('/addons/:id', controller.getAddOns);

category.post('/addons/stored', function (req, res) {
    controller.storeAddOns(req, res);
});

category.get('/addons/stored/get', function (req, res) {
    controller.getStoredAddOns(req, res);
});

module.exports = category;