const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Sachmoi = new Schema({
    name: { type: String },
    image: { type: String },
    price: { type: Number },
    createdAt: { type: Date, default:Date.now },
    updatedAt: { type: Date, default:Date.now },
})

module.exports = mongoose.model('Sachmoi', Sachmoi);