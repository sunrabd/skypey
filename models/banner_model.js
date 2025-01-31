const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Banner = sequelize.define('Banner', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  home_banner_img: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  slider_banner_img: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
},
{
  tableName: 'banner',
  timestamps: false,
});

module.exports = Banner;