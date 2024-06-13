// setting up server


// importing express package
const express = require('express');

const app = express();

const PORT = 3001;


// middleware for parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
    console.log("app is listening")
});



