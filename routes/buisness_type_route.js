const express = require('express');
const {
  createBuisnessType,
  getBuisnessTypes,
  getBuisnessTypeById,
  updateBuisnessType,
  deleteBuisnessType,
} = require('../controllers/buisness_type_controller');

const router = express.Router();

router.post('/create', createBuisnessType);
router.get('/', getBuisnessTypes); 
router.get('/:id', getBuisnessTypeById);
router.put('/:id', updateBuisnessType); 
router.delete('/:id', deleteBuisnessType);
module.exports = router;
