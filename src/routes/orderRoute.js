const router = require('express').Router()
const orderCtrl = require('../controller/orderCtrl')

router.get('/:id', orderCtrl.getUserOrder)
router.post('/:id', orderCtrl.createOrder)
router.get('/', orderCtrl.getAllOrders)


module.exports = router