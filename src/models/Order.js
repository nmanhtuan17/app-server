const mongoose = require('mongoose')

const Order = mongoose.Schema({
    product: { type: String, require: true },
    qty: { type: Number, require: true },
    customer: { type: String, require: true },
    address: {
        country: String,
        city: String,
        district: String,
        street: String
    },
    desc: String
})




module.exports = mongoose.model('Order', Order)