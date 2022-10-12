import express from 'express';

const category = express();


category.get('/', (req, res) => {

    const categories = [
        {
            "id": 1,
            "name": "Category 1"
        },
        {
            "id": 2,
            "name": "Category 2"
        },
        {
            "id": 3,
            "name": "Category 3"
        }
    ]
    res.send(categories);
});

module.exports = category;