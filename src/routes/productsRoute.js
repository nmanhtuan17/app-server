const router = require('express').Router()
const productCtrl = require('../controller/productCtrl')

router.post('/createproduct', productCtrl.createProduct)
router.get('/', productCtrl.getAllProduct)

module.exports = router