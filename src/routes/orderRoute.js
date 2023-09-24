const router = require('express').Router()
const orderCtrl = require('../controller/orderCtrl')

router.get('/', orderCtrl.getAllOrder)
router.post('/createorder', orderCtrl.createOrder)



module.exports = router