const Device = require('./../models/device')

exports.getDeviceList = (req, res) => {
    Device.find({})
    .then(data =>  {
        console.log(data)
        res.send(data)
    })
    .catch(err => res.send(err))
}

exports.addDevice = (req, res) => {
    const device = new Device({ ...req.body })
    device.save()
    .then(data => {
        res.send(data)
    })
    .catch(err => res.send(err))
}


exports.updateDeviceById = (req, res) => {
    console.log("parmas ", req.params.id)
    Device.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(device => {
        if(!device) {
            return res.status(404).send({
                message: "Device not found with id " + req.params.id
            });
        }
        res.send(device);
    }).catch(err => {
        return res.status(404).send({
            message: "Device not found with id " + req.params.id
        });                 
    });
}

exports.deleteDevice = (req, res) => {
    Device.findByIdAndRemove(req.params.id)
    .then(device => {
        if(!device) {
            return res.status(404).send({
                message: "Device not found with id " + req.params.id
            });
        }
        res.send({ message: "Device deleted successfully!" });
    }).catch(err => {
        return res.status(404).send({
            message: "Product not found with id " + req.params.id
        });
    });
}

