const express = require('express');
const ReservationRouter = express.Router();
const ReservationController = require('./../Controller/ReservationController');

ReservationRouter.get('/',ReservationController.index);
ReservationRouter.post('/add',ReservationController.addReservation);


module.exports = ReservationRouter;