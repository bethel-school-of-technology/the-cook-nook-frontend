const express = require('express'); 
const mongoose = require('mongoose');
const app = express(); 
const bodyParser = require('body-parser');
require("dotenv/config");

//Need body-parser to convert to json

app.use(bodyParser.json());

//Import Routes
const postRoute = require('./routes/post');

app.use('/posts', postRoute)


// Routes


//Connect to db

mongoose.connect(
    process.env.DB_CONNECTION,  
    {useNewUrlParser: true},
    () =>  console.log("conneted to db")
    );

// How do we start listening to the server?

/* app.listen(8080); */ 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => 
console.log(`Server started on port ${PORT}`));