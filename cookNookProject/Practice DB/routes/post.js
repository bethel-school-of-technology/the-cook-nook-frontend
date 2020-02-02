const express = require('express'); 
const router = express.Router(); 
const Post = require('../models/Post');

//Doesn't need /post because of middleware in app.js
//Get back all the posts
router.get('/', async (req,res) => {
   try { 
       const posts = await Post.find(); 
       res.json(posts);
   }catch (err) {
       res.json ({message: err});
   }
});

//Submits a post
router.post('/', async (req, res) => {
    console.log("Test1")
try {
        post = new Post({
       title: req.body.title, 
       description: req.body.description
   });
   console.log("Test2")
   console.log(post);

   await post.save()
   res.send(post);
//    .then(data => {
//        res.json(data);
//    })
   console.log("Test3")
} catch(err) {
       res.json({ message: err});
   };

   console.log("Success!")
});

//Specific post

router.get('/:postId', async (req,res) => {
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch (err){
        res.json(err);
    }});

//Delete
router.delete('/:postId', async (req, res) => {
    try{
    const removePost = await Post.remove({_id: req.params.postId})
    res.json(removePost);
    }catch(err){
        res.json({message: err});
    }

})

//Update a post
router.put('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId}, 
            {$set: {title: req.body.postId}}
        );
        res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router