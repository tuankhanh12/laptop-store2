const express = require('express');
const laptopController = require('../controllers/laptopController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', laptopController.getAll);
router.get('/:id', laptopController.getById);
router.post('/', authMiddleware, laptopController.create);
router.put('/:id', authMiddleware, laptopController.update);
router.delete('/:id', authMiddleware, laptopController.delete);

module.exports = router;
