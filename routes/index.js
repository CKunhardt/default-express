const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.index)

module.exports = router