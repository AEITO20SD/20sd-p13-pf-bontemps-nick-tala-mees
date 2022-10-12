import express from 'express';

const category = express();


category.get('/', (req, res) => {

    const categories = [
        {
            "id": 1,
            "name": "Menu's",
            "pictogram": "../../../../assets/svg/menu.svg"
        },
        {
            "id": 2,
            "name": "Drinks",
            "pictogram": "../../../../assets/svg/drinks.svg"
        },
        {
            "id": 3,
            "name": "Wines",
            "pictogram": "../../../../assets/svg/wine.svg"
        },
        {
            "id": 4,
            "name": "Beers",
            "pictogram": "../../../../assets/svg/beer.svg"
        },
        {
            "id": 5,
            "name": "Coffees",
            "pictogram": "../../../../assets/svg/coffee.svg",
        },
        {
            "id": 6,
            "name": "Extra's",
            "pictogram": "../../../../assets/svg/extra.svg"
        },
    ]
    res.send(categories);
});

module.exports = category;