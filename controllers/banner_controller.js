const Banner = require('../models/banner_model');
const upload = require('../middleware/upload');

// Create Banner
const createBanner = async (req, res) => {
  const uploadFields = upload.fields([
    { name: 'home_banner_img', maxCount: 1 },
    { name: 'slider_banner_img', maxCount: 10 },
  ]);

  uploadFields(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ status: false, message: err.message });
    }

    const { name } = req.body;
    const home_banner_img = req.files.home_banner_img
      ? `/uploads/${req.files.home_banner_img[0].filename}`
      : null;
    const slider_banner_img = req.files.slider_banner_img
      ? req.files.slider_banner_img.map((file) => `/uploads/${file.filename}`)
      : [];

    try {
      const newBanner = await Banner.create({
        home_banner_img,
        slider_banner_img,
        name,
      });

      res.status(201).json({
        status: true,
        message: 'Banner created successfully',
        data: newBanner,
      });
    } catch (error) {
      console.error('Error in createBanner:', error);
      res.status(500).json({ status: false, message: 'Error creating banner', error: error.message });
    }
  });
};

// Get All Banners
const getBanners = async (req, res) => {
  try {
    const banners = await Banner.findAll();
    res.status(200).json({
      status: true,
      message: 'Banners retrieved successfully',
      data: banners,
    });
  } catch (error) {
    console.error('Error in getBanners:', error);
    res.status(500).json({ status: false, message: 'Error fetching banners', error: error.message });
  }
};

// Get Banner by ID
const getBannerById = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await Banner.findByPk(id);

    if (!banner) {
      return res.status(404).json({ status: false, message: 'Banner not found' });
    }

    res.status(200).json({
      status: true,
      message: 'Banner retrieved successfully',
      data: banner,
    });
  } catch (error) {
    console.error('Error in getBannerById:', error);
    res.status(500).json({ status: false, message: 'Error fetching banner', error: error.message });
  }
};

// Delete Banner
const deleteBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await Banner.findByPk(id);

    if (!banner) {
      return res.status(404).json({ status: false, message: 'Banner not found' });
    }

    await banner.destroy();
    res.status(200).json({
      status: true,
      message: 'Banner deleted successfully',
    });
  } catch (error) {
    console.error('Error in deleteBanner:', error);
    res.status(500).json({ status: false, message: 'Error deleting banner', error: error.message });
  }
};

module.exports = {
  createBanner,
  getBanners,
  getBannerById,
  deleteBanner,
};
