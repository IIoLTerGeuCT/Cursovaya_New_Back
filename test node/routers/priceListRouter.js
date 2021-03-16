const express = require('express');
const router = express.Router()
const priceListController = require('../controllers/priceListController');

router.get('/priceList', priceListController.getAll)

module.exports = router