const routes = require('express').Router();

const deviceController = require('./../models/devices.controller');


routes.get("/", (req, res) => {
    res.send({ name: "raman" })
})

routes.get('/getDevices', deviceController.getDeviceList)
routes.post('/addDevice', deviceController.addDevice)

module.exports = routes;
