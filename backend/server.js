
const express = require('express');
const passport = require('passport');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); 
//app.use(express.static(path.join(_dirname, 'public')));

app.use(session({ secret: 'perilous journey' })); 
app.use(passport.initialize()); 
app.use(passport.session());

const userRoutes = require('./app/routes/users.routes.js'); 

app.use('/', userRoutes);

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose'); 

mongoose.Promise = global.Promise; 

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Successfully connected to the database.');

}).catch(err => {
    console.log("Could not connect to the database. Exiting now."); 
    process.exit();
}) 




app.listen(8080, () => {
    console.log("Server is listening in on port 8080");
});