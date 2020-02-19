const jwt = require('jsonwebtoken');
const models = require('../models'); 

var authService = {
    signUser: function(User) {
        const token = jwt.sign(
            {
                username: User.username, 
                id: User.id
            }, 
            'secretkey', {
                expiresIn: '1h'
            }
        );
        return token;
    }
}

module.exports = authService;