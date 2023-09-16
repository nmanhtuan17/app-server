const router = require('express').Router()
const productCtrl = require('../controllers/productCtrl')

router.get('/', productCtrl.getAllProduct)

module.exports = router