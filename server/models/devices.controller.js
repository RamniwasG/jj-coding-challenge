const dbo = require('./../db/mongodb/index')
console.log("inside devies", dbo)

exports.getDeviceList = (req, res) => {
    dbo.collection("devices").find({}, (err, res) => {
        if(err) console.log(err)
        console.log(res)
    })
}

exports.addDevice = (req, res, next) => {
    dbo.collection("devices").insertOne({ name: "raman" }, (err, result) => {
        if(err) console.log(err);
        console.log("response ", JSON.stringify(result))
    })
}