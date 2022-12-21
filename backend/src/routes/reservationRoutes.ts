import express from 'express';

const reservation = express();

const controller = require('../controllers/reservationController');

reservation.get('/:id', controller.getReservation);

reservation.get('/calander/dates/', controller.get28DayCalander);

module.exports = reservation;