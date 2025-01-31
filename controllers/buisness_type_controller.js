const BuisnessType = require('../models/buisness_type_model');

// Create Business Type
const createBuisnessType = async (req, res) => {
  const { name, is_active } = req.body;

  try {
    const newBuisnessType = await BuisnessType.create({ name, is_active });

    res.status(201).json({
      status: true,
      message: 'Business Type created successfully',
      data: newBuisnessType,
    });
  } catch (error) {
    console.error('Error in createBuisnessType:', error);
    res.status(500).json({
      status: false,
      message: 'Error creating business type',
      error: error.message,
    });
  }
};

// Get All Business Types
const getBuisnessTypes = async (req, res) => {
  try {
    const buisnessTypes = await BuisnessType.findAll();

    res.status(200).json({
      status: true,
      message: 'Business Types retrieved successfully',
      data: buisnessTypes,
    });
  } catch (error) {
    console.error('Error in getBuisnessTypes:', error);
    res.status(500).json({
      status: false,
      message: 'Error fetching business types',
      error: error.message,
    });
  }
};

// Get Business Type by ID
const getBuisnessTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const buisnessType = await BuisnessType.findByPk(id);

    if (!buisnessType) {
      return res.status(404).json({
        status: false,
        message: 'Business Type not found',
      });
    }

    res.status(200).json({
      status: true,
      message: 'Business Type retrieved successfully',
      data: buisnessType,
    });
  } catch (error) {
    console.error('Error in getBuisnessTypeById:', error);
    res.status(500).json({
      status: false,
      message: 'Error fetching business type',
      error: error.message,
    });
  }
};

// Update Business Type
const updateBuisnessType = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, is_active } = req.body;

    const buisnessType = await BuisnessType.findByPk(id);

    if (!buisnessType) {
      return res.status(404).json({
        status: false,
        message: 'Business Type not found',
      });
    }

    buisnessType.name = name || buisnessType.name;
    if (is_active !== undefined) buisnessType.is_active = is_active;

    await buisnessType.save();

    res.status(200).json({
      status: true,
      message: 'Business Type updated successfully',
      data: buisnessType,
    });
  } catch (error) {
    console.error('Error in updateBuisnessType:', error);
    res.status(500).json({
      status: false,
      message: 'Error updating business type',
      error: error.message,
    });
  }
};

// Delete Business Type
const deleteBuisnessType = async (req, res) => {
  try {
    const { id } = req.params;
    const buisnessType = await BuisnessType.findByPk(id);

    if (!buisnessType) {
      return res.status(404).json({
        status: false,
        message: 'Business Type not found',
      });
    }

    await buisnessType.destroy();

    res.status(200).json({
      status: true,
      message: 'Business Type deleted successfully',
    });
  } catch (error) {
    console.error('Error in deleteBuisnessType:', error);
    res.status(500).json({
      status: false,
      message: 'Error deleting business type',
      error: error.message,
    });
  }
};

module.exports = {
  createBuisnessType,
  getBuisnessTypes,
  getBuisnessTypeById,
  updateBuisnessType,
  deleteBuisnessType,
};
