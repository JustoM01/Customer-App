// models/User.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require("../connection/config");
class User extends Model { };


User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    

    {    // Link to database connection
        sequelize,
        // Set to false to remove `created_at` and `updated_at` fields
        timestamps: false,
        underscored: true,
        modelName: 'user'
    }    
    
    
)  


module.exports = User;
