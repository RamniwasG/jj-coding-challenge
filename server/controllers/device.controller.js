const Device = require('./../models/device')

exports.getDeviceList = (req, res) => {
    
}

exports.addDevice = (req, res) => {
    const device = new Device({ ...req.body })
    device.save()
    .then(data => {
        res.send(data)
    })
    .catch(err => res.send(err))
}
