const Notification = require('../models/notification_model');

// Create Notification
const createNotification = async (req, res) => {
  const { title } = req.body;

  try {
    const newNotification = await Notification.create({ title });

    res.status(201).json({
      status: true,
      message: 'Notification created successfully',
      data: newNotification,
    });
  } catch (error) {
    console.error('Error in createNotification:', error);
    res.status(500).json({
      status: false,
      message: 'Error creating notification',
      error: error.message,
    });
  }
};

// Get All Notifications
const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findAll();

    res.status(200).json({
      status: true,
      message: 'Notifications retrieved successfully',
      data: notifications,
    });
  } catch (error) {
    console.error('Error in getNotifications:', error);
    res.status(500).json({
      status: false,
      message: 'Error fetching notifications',
      error: error.message,
    });
  }
};

// Get Notification by ID
const getNotificationById = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findByPk(id);

    if (!notification) {
      return res.status(404).json({
        status: false,
        message: 'Notification not found',
      });
    }

    res.status(200).json({
      status: true,
      message: 'Notification retrieved successfully',
      data: notification,
    });
  } catch (error) {
    console.error('Error in getNotificationById:', error);
    res.status(500).json({
      status: false,
      message: 'Error fetching notification',
      error: error.message,
    });
  }
};

// Update Notification
const updateNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const notification = await Notification.findByPk(id);

    if (!notification) {
      return res.status(404).json({
        status: false,
        message: 'Notification not found',
      });
    }

    notification.title = title || notification.title; // Update the title if provided
    await notification.save();

    res.status(200).json({
      status: true,
      message: 'Notification updated successfully',
      data: notification,
    });
  } catch (error) {
    console.error('Error in updateNotification:', error);
    res.status(500).json({
      status: false,
      message: 'Error updating notification',
      error: error.message,
    });
  }
};


// Delete Notification
const deleteNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findByPk(id);

    if (!notification) {
      return res.status(404).json({
        status: false,
        message: 'Notification not found',
      });
    }

    await notification.destroy();
    res.status(200).json({
      status: true,
      message: 'Notification deleted successfully',
    });
  } catch (error) {
    console.error('Error in deleteNotification:', error);
    res.status(500).json({
      status: false,
      message: 'Error deleting notification',
      error: error.message,
    });
  }
};

module.exports = {
  createNotification,
  getNotifications,
  getNotificationById,
  updateNotification,
  deleteNotification,
};
