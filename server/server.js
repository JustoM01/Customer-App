require('dotenv').config();  



const express = require('express');
const sequelize = require('./connection/config')
const routes = require('./routes')
const cors = require('cors'); // Import the cors package
const PORT = process.env.PORT || 3001;
const app = express();

// middleware fo parsing data
app.use(express.json());
app.use(express.urlencoded({extended:true}));



// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));


// passing routes
app.use(routes);

const User= require('./models/User');


// sets up server and db using sequelize
sequelize.sync().then(()=>{
  app.listen(PORT, ()=>{
    console.log('app is listening')
  })
})


// // making sure env variables are accesible
// console.log('DB_NAME:', process.env.DB_NAME);
// console.log('DB_USER:', process.env.DB_USER);
// console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
// console.log('JWT Secret:', process.env.JWT_SECRET);

