const express = require('express');
const {
  createBuisnessCategory,
  getBuisnessCategories,
  getBuisnessCategoryById,
  updateBuisnessCategory,
  deleteBuisnessCategory,
} = require('../controllers/buisness_category_controller');

const router = express.Router();

// Routes
router.post('/create', createBuisnessCategory);
router.get('/', getBuisnessCategories);
router.get('/:id', getBuisnessCategoryById);
router.put('/:id', updateBuisnessCategory);
router.delete('/:id', deleteBuisnessCategory);

module.exports = router;
