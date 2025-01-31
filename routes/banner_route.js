const express = require('express');
const { createBanner, getBanners, getBannerById, deleteBanner } = require('../controllers/banner_controller');

const router = express.Router();

// Routes
router.post('/create', createBanner);
router.get('/', getBanners);
router.get('/:id', getBannerById);
router.delete('/:id', deleteBanner);

module.exports = router;
