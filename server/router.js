const express = require('express');

const router = express.Router();
const controller = require('./controllers');

router.get('/api/product', controller.products.getProduct);
router.get('/api/product/styles', controller.overView.getProductStyles);
router.get('/api/product/related', controller.relatedProducts.getRelatedProducts);
router.get('/api/product/relatedStyle', controller.relatedProductStyle.getRelatedStyle);
router.get('/questions', controller.questions.getQuestions);
router.get('/reviews', controller.ratings.getRatings);

router.put('/qa/:type/:id/helpful', controller.questions.updateHelpful);
router.put('/qa/:type/:id/report', controller.questions.reportQA);

module.exports = router;
