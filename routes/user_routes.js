const express = require('express');
const userController = require('../controllers/user_controller');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.put('/:id', userController.updateUser);
router.post('/send-otp', userController.sendOtp);
router.post('/verify-otp', userController.verifyOtp);
router.delete('/:id', userController.deleteUser);

module.exports = router;
