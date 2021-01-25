const routes = require('express').Router();

const deviceController = require('./../controllers/device.controller');

routes.get('/', deviceController.getDeviceList)
routes.post('/addDevice', deviceController.addDevice)

module.exports = routes;
