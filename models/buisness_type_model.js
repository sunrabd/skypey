const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const BuisnessType = sequelize.define('BuisnessType', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  is_active:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
},
{
  tableName: 'buisness-type',
  timestamps: false,
});

module.exports = BuisnessType;