const router = require('express').Router()
const userCtrl = require('../controller/userCtrl.js')


router.get('/', userCtrl.getAllUser)

module.exports = router