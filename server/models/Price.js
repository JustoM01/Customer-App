// models/Price.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection/config');
const ServiceType = require('./serviceType');

class Price extends Model {}

Price.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    serviceTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: ServiceType,
        key: 'id',
      },
      allowNull: false,
    },
    vehicleType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    basePrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    multiplier: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Price',
    timestamps: true,
  }
);

Price.belongsTo(ServiceType, { foreignKey: 'serviceTypeId' });
ServiceType.hasMany(Price, { foreignKey: 'serviceTypeId' });

module.exports = Price;
