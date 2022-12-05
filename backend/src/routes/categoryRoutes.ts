import express from 'express';

const category = express();

const controller = require('../controllers/categoryController');

category.get('/', controller.getCategories);

category.get('/addons/:id', controller.getAddOns);

module.exports = category;