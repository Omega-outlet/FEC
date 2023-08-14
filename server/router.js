const express = require('express');

const router = express.Router();
const controller = require('./controllers');

router.get('/api/products', controller.products.getProduct);
router.get('/api/product/styles', controller.overView.getProductStyles);

module.exports = router;
