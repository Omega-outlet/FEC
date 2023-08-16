const express = require('express');

const router = express.Router();
const controller = require('./controllers');

router.get('/api/product', controller.products.getProduct);
router.get('/api/product/styles', controller.overView.getProductStyles);
router.get('/api/product/related', controller.relatedProducts.getRelatedProducts);
router.get('/api/product/relatedStyle', controller.relatedProductStyle.getRelatedStyle);

module.exports = router;
