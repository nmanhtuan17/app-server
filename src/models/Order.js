const mongoose = require('mongoose')

const Order = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    userId: { type: String, require: true },
    customerId: { type: String, require: true },
    qty: { type: Number, require: true },
    address: {
        country: String,
        city: String,
        district: String,
        street: String
    },
    delivery_status: { type: String, default: "pending" },
    subtotal: { type: Number, require: true },
    total: { type: Number, require: true },
    payment_status: { type: String, require: true},

    desc: String
})




module.exports = mongoose.model('Order', Order)