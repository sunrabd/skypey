const BuisnessCategory = require('../models/buisness_category_model');

// Create Business Category
const createBuisnessCategory = async (req, res) => {
  const { name, is_active } = req.body;

  try {
    const newBuisnessCategory = await BuisnessCategory.create({ name, is_active });

    res.status(201).json({
      status: true,
      message: 'Business Category created successfully',
      data: newBuisnessCategory,
    });
  } catch (error) {
    console.error('Error in createBuisnessCategory:', error);
    res.status(500).json({
      status: false,
      message: 'Error creating business category',
      error: error.message,
    });
  }
};

// Get All Business Categories
const getBuisnessCategories = async (req, res) => {
  try {
    const buisnessCategories = await BuisnessCategory.findAll();

    res.status(200).json({
      status: true,
      message: 'Business Categories retrieved successfully',
      data: buisnessCategories,
    });
  } catch (error) {
    console.error('Error in getBuisnessCategories:', error);
    res.status(500).json({
      status: false,
      message: 'Error fetching business categories',
      error: error.message,
    });
  }
};

// Get Business Category by ID
const getBuisnessCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const buisnessCategory = await BuisnessCategory.findByPk(id);

    if (!buisnessCategory) {
      return res.status(404).json({
        status: false,
        message: 'Business Category not found',
      });
    }

    res.status(200).json({
      status: true,
      message: 'Business Category retrieved successfully',
      data: buisnessCategory,
    });
  } catch (error) {
    console.error('Error in getBuisnessCategoryById:', error);
    res.status(500).json({
      status: false,
      message: 'Error fetching business category',
      error: error.message,
    });
  }
};

// Update Business Category
const updateBuisnessCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, is_active } = req.body;

    const buisnessCategory = await BuisnessCategory.findByPk(id);

    if (!buisnessCategory) {
      return res.status(404).json({
        status: false,
        message: 'Business Category not found',
      });
    }

    buisnessCategory.name = name || buisnessCategory.name;
    if (is_active !== undefined) buisnessCategory.is_active = is_active;

    await buisnessCategory.save();

    res.status(200).json({
      status: true,
      message: 'Business Category updated successfully',
      data: buisnessCategory,
    });
  } catch (error) {
    console.error('Error in updateBuisnessCategory:', error);
    res.status(500).json({
      status: false,
      message: 'Error updating business category',
      error: error.message,
    });
  }
};

// Delete Business Category
const deleteBuisnessCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const buisnessCategory = await BuisnessCategory.findByPk(id);

    if (!buisnessCategory) {
      return res.status(404).json({
        status: false,
        message: 'Business Category not found',
      });
    }

    await buisnessCategory.destroy();

    res.status(200).json({
      status: true,
      message: 'Business Category deleted successfully',
    });
  } catch (error) {
    console.error('Error in deleteBuisnessCategory:', error);
    res.status(500).json({
      status: false,
      message: 'Error deleting business category',
      error: error.message,
    });
  }
};

module.exports = {
  createBuisnessCategory,
  getBuisnessCategories,
  getBuisnessCategoryById,
  updateBuisnessCategory,
  deleteBuisnessCategory,
};
