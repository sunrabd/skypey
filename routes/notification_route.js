const express = require('express');
const {
  createNotification,
  getNotifications,
  getNotificationById,
  updateNotification,
  deleteNotification,
} = require('../controllers/notification_controller');

const router = express.Router();

// Routes
router.post('/create', createNotification);
router.get('/', getNotifications);
router.get('/:id', getNotificationById);
router.put('/:id', updateNotification);
router.delete('/:id', deleteNotification);

module.exports = router;
