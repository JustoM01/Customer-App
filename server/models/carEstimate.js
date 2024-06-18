
const sequelize = require('../connection/config')
const {Model, DataTypes}= require('sequelize')


const User = require('./User')
class carEstimate extends Model {};

carEstimate.init(
    {
        serviceType: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          date: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          estimatedCost: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },

    userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id',
        },
      },

    },
    {
        sequelize,
  modelName: 'carEstimate',
  timestamps: true,  
    }
)


carEstimate.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(carEstimate, { foreignKey: 'userId' });


module.exports= carEstimate;