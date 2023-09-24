const Order = require('../models/Order')

module.exports = {
    getAllOrder: async (req, res) => {
        try {
            const orders = await Order.find({})
            res.status(200).json(orders)
        } catch (error) {
            res.status(500).json('get all orders error')
        }
    },
    createOrder: async (req, res) => {
        try {
            const newOrder = new Order({
                ...req.body
            })
            res.status(200).json('create order success')
        } catch (error) {
            res.status(500).json('get all orders error')
        }
    }
}