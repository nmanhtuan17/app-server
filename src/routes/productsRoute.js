const router = require('express').Router()
const productCtrl = require('../controller/productCtrl')

router.post('/', productCtrl.createProduct)
router.get('/search/:key', productCtrl.searchProduct)
router.get('/', productCtrl.getAllProduct)
module.exports = router