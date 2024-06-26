// importing Sequelize and setting it equal to a variable
const Sequelize = require('sequelize');

// Enable access to .env variables
require('dotenv').config();
// Create a connection object
const sequelize = new Sequelize(
    // Database name
    process.env.DB_NAME,
    // User
    process.env.DB_USER,
    //password
    process.env.DB_PASSWORD,
    {
        // Database location
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);
module.exports = sequelize;