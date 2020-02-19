const mongoose = require('mongoose'); 

const UserSchema = mongoose.Schema({ 
    id: Number,
    username: String, 
    password: String,  
    recipes: [{
       id: Number, 
       type: String, 
       name: String, 
       desc: String, 
       time: String, 
       ing: [], 
       instructs: [{
           id: Number, 
           name: String, 
           subDesc: String
       }]
    }]
})

module.exports = mongoose.model('User', UserSchema);
