const express = require('express');
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, cartController.getCart);
router.post('/add', authMiddleware, cartController.addToCart);
router.post('/remove', authMiddleware, cartController.removeFromCart);

module.exports = router;
