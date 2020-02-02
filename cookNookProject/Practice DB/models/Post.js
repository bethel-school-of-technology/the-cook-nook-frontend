const mongoose = require('mongoose');
//create schema to describe how the data looks

const PostSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    description: String,
    date: {
        type: Date, 
        default: Date.now
    },
}); 

module.exports = Post = mongoose.model('Posts', PostSchema);