const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  profile_picture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  deviceId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  deviceToken: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mobile_no: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
},
{
  tableName: 'user',
  timestamps: false,
});

module.exports = User;