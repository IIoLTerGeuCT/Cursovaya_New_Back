const express = require('express');
const router = express.Router()
const autController = require('../controllers/autController')

router.get('/login', autController.login)
router.get('/register', autController.register)

module.exports = router