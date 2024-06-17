const {Model, Datatypes}= require('sequelize')
const sequelize = require('../connection/config')

class carEstimate extends Model {};

carEstimate.init(
    {

      make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    mileage: DataTypes.INTEGER,



    },
    {
        sequelize,
  modelName: 'User',
  timestamps: true,  
    }
)


module.exports= carEstimate;