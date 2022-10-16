import express from 'express';

const category = express();

const controller = require('../controllers/categoryController');

category.get('/', controller.getCategories);

module.exports = category;