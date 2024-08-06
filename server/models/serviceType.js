// models/serviceType.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection/config'); 

class serviceType extends Model {}

serviceType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'ServiceType',
    timestamps: true, // Enable timestamps (createdAt, updatedAt)
  }
);




module.exports = serviceType;
