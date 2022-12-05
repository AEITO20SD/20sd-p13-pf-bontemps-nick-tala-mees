// const connection = require('../helpers/connect');

exports.getReservation = (req, res) => {
    const data = [{
        id: 1,
        guestAmount: 2,
        uniqueString: '123456789',
        dateOfCreation: '2021-01-01',
        dateOfReservation: '2021-01-01',
    }]
    res.send(data);
}