const express = require('express');

const router = express.Router();
const controller = require('./controllers');

router.get('/api/product', controller.products.getProduct);
router.get('/api/product/styles', controller.overView.getProductStyles);
router.get('/questions', controller.questions.getQuestions);
router.get('/reviews', controller.ratings.getRatings);
router.post('/reviews');
router.get('/reviews/meta', controller.ratings.getMetaData);
router.put('/reviews/:review_id/helpful');
router.put('/reviews/:review_id/report');

module.exports = router;
