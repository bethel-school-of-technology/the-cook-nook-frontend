const passport = require('passport'); 
const LocalStrategy = require('passport-local').Strategy; 
const models = require('../models'); 

passport.use(
    'local', 
    new LocalStrategy(function (username, password, done) {
        models.User.findOne({ where: {username: username}})
        .then(User => {
            if(!User){
                return done(null, false, {message: 'Incorrect Username.'});
            }
            if(User.password !== password) {
                return done(null, false, {message: 'Incorrect password.'});
            }
            return done(null, User);
        })
        .catch(err => {
            if (err) {
                return done(err);
            }
        })
    }
));

passport.serializeUser((User, callback) => {
    callback(null, User.id);
});

passport.deserializeUser((id, callback) => {
    models.User
    .findByPk(id)
    .then(User => callback(null, User))
    .catch(err => callback(err));
});

module.exports = passport;