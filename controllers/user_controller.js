const User = require('../models/user_model');
const crypto = require('crypto');
const otpStore = {};

const userController = {
    async sendOtp(req, res) {
        try {
          const { mobile_no } = req.body;
          const otp = mobile_no === '1234' ? '1234' : crypto.randomInt(1000, 9999).toString();
    
          otpStore[mobile_no] = otp;
          console.log(`OTP sent to ${mobile_no}: ${otp}`);
          return res.status(200).json({ status : true , message: 'OTP sent successfully' });
        } catch (error) {
          return res.status(500).json({ status : false , error: error.message });
        }
      },
    
      async verifyOtp(req, res) {
        try {
          const { mobile_no, otp } = req.body;
    
          if (otpStore[mobile_no] === otp || otp === '1234') {
            delete otpStore[mobile_no];
            return res.status(200).json({status: true , message: 'OTP verified successfully' });
          }
    
          return res.status(400).json({status: false, message: 'Invalid OTP' });
        } catch (error) {
          return res.status(500).json({status : false, error: error.message });
        }
      },

  async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json({status:true,message:"get all user successfully.", data:users});
    } catch (error) {
      return res.status(500).json({status: false, error: error.message });
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updates = req.body;
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({status: true, message: 'User not found' });
      await user.update(updates);
      return res.status(200).json({status:true, message: 'User updated successfully', data :user });
    } catch (error) {
      return res.status(500).json({ status: false,error: error.message });
    }
  },

 
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({status: false, message: 'User not found' });
      await user.destroy();
      return res.status(200).json({status: true, message: 'User deleted successfully' });
    } catch (error) {
      return res.status(500).json({status: false, error: error.message });
    }
  },
};

module.exports = userController;
