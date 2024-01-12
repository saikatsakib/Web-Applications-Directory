const express = require('express');
const BusRouter = express.Router();
const BusController = require('./../Controller/BusController');

BusRouter.post('/create',BusController.createBus);
BusRouter.get('/',BusController.index);


module.exports = BusRouter;