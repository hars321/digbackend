var express = require('express');
var router = express.Router();

// const getCategoryNearby=require('./categoryNearby.js');
const Rating=require('./Rating.js');
const User = require('./User');

router.get('/',function(req,res){
    res.send("putData page")
})
router.post('/rating', function(req, res){
    Rating.putData(req.body)
    .then(data=>{
       console.log(data);
       res.send(data);
    }).catch(err=>{
       console.log(err);
       res.send(err);
    })
 });
 
 router.put('/rating',function(req,res){
    Rating.updateData(req.body)
    .then(data=>data.json().then(data=>{
       res.send(data);
      }))
    .catch(err=>{
       res.status(400).send(err)
    })
 })
 
router.post('/user', function(req, res){
    User.putData(req.body)
    .then(data=>{
       console.log(data)
       res.json(data);
    }).catch(err=>{
       console.log(err);
       res.send(err);
    })
 });
 

 module.exports=router;