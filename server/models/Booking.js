// models/Booking.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection/config');
const ServiceType = require('./serviceType');

class Booking extends Model {}

Booking.init(
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
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookingDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Booking',
    timestamps: true,
  }
);

Booking.belongsTo(ServiceType, { foreignKey: 'serviceTypeId' });
ServiceType.hasMany(Booking, { foreignKey: 'serviceTypeId' });

module.exports = Booking;
