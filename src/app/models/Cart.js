const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cart = new Schema({
    category: { type: String },
    name: { type: String },
    image: { type: String },
    price: { type: Number },
    slug: { type: String, maxlength: 255 },
    createdAt: { type: Date, default:Date.now },
    updatedAt: { type: Date, default:Date.now },
})

module.exports = mongoose.model('Cart', Cart);