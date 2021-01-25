var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
    id: { type: Number, required: true, min: 1, unique: true },
    device: {type: String, required: true },
    os: { type: String, required: true},
    manufacturer: { type: String, required: true},
    lastCheckedOutDate: { type: Date, required: true},
    lastCheckedOutBy: { type: String, required: true},
    isCheckedOut: { type: Boolean, required: true }
});

module.exports = mongoose.model('Devices', DeviceSchema);