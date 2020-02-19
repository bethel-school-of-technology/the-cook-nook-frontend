const express = require('express');
const router = express.Router();
//const mongoose = require('mongoose'); 
const passport = require('../services/passport');
const User = require('../models/user.model');
//const authService = require('../services/auth'); If I have passport authentication, do I need JWT???

//home page (registration)
router.get('/', function(req, res, next){
    res.render('home'); //not sure how to connect this to the home component
}); 

//new user
router.post('/', function(req, res, next){
    User
        .findOrCreate({
            defaults: {
                username: req.body.username, 
                password: req.body.password
            }
        })
        .spread(function(result, created){
            if(created){
                res.send('User successfully created!');
            } else{
                res.send('This User already exists!');
            }
        });
});

//login page
router.get('/login', function(req, res, next){
    res.render('login');
})


//user login
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login'
    }),
    function(req, res, next){
        res.redirect('/logged');
    }
);

//user homepage + JSON data conversion
router.get('/logged', function(req, res, next){
    if(req.User) {User
        .findAll()
        .then(recipesFound => {
            res.setHeader("Content-Type", "application/json"); 
            res.send(JSON.stringify(recipesFound));
        });
    };
});

//shows one recipe
router.get('/logged/:id', function(req, res, next){
    if(req.User) {User
    .findByPk(parseInt(req.params.id))
    .then(User =>{
        if (User){
            res.render('logged');
        }else{
            res.send('User not found.')
        }
    });
    } else {res.redirect('/logged');
};
});

//add recipe
router.get('/logged/:id/add', function(req, res, next){
    res.render('add') 
});

router.post('/logged/:id/add', function(req, res, next){
    if(req.body != empty){
        user = new User.recipes({
            type: req.body.type, 
            name: req.body.name, 
            desc: req.body.desc, 
            ing: req.body.ing, 
            instructs: [{
                name: req.body.name, 
                subDesc: req.body.subDesc
            }]
        }); 
        user.save();
    } else{ 
        return({message: "Recipe Not Saved"})
    }
});





module.exports = router;
