// setting up server

// importing sequelize connection to sql
const sequelize = require("./connection/config");

// importing environmental variables
require('dotenv').config();

// importing express package
const express = require('express');

const app = express();

const PORT = 3001;

const User = require("./models/User")

// middleware for parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('app is listening')
    })
})



