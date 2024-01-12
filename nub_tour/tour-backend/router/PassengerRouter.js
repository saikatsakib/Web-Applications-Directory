const express = require('express');
const PassengerRouter = express.Router();
const PassengerController = require('./../Controller/PassengerController');

PassengerRouter.get('/',PassengerController.index);
PassengerRouter.post('/add',PassengerController.addPassenger);


module.exports = PassengerRouter;