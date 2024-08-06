// importing Sequelize and setting it equal to a variable
const Sequelize = require('sequelize');

// Enable access to .env variables
require('dotenv').config();
// Create a connection object
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || 'localhost',
      dialect: 'mysql',
      port: process.env.DB_PORT || 3306,
      logging: process.env.NODE_ENV === 'development' ? console.log : false
    }
  );
module.exports = sequelize;