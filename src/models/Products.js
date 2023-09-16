const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    title: {type: String, require: true},
    suplier: String,
    price: {type: Number, require: true},
    imageUrl: String,
    desc: String,
    product_location: String,
})


module.exports = mongoose.model('Product', ProductSchema)