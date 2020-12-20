var express = require('express');
var router = express.Router();

// const getCategoryNearby=require('./categoryNearby.js');
const Rating=require('./Rating.js');
const Product= require('./Product.js')
const User= require('./User.js')

router.get('/',function(req,res){
    res.send("getData route")
})
router.post('/rating', function(req, res){
    
    let {user_id,product_id}=req.body

    Rating.getRating(user_id,product_id)
    .then(data=>{
       console.log(data);
       res.send(data);
    }).catch(err=>{
       console.log(err);
       res.send(err);
    })
 });
 
 router.get('/product/:id',function(req,res){
     let id=req.params.id;
     Product.getProductWithId(id)
     .then(data=>{
        console.log(data);
        res.send(data);
     }).catch(err=>{
        console.log(err);
        res.send(err);
     })
 })

 router.get('/products',function(req,res){
    
    Product.getData()
    .then(data=>{
       console.log(data);
       res.send(data);
    }).catch(err=>{
       console.log(err);
       res.send(err);
    })
})

router.post('/user',function(req,res){
    console.log(req.body)
    User.findUser(req.body)
    
    .then(data=>{
       console.log(data);
       res.status(200).json(data);
    }).catch(err=>{
       console.log(err);
       res.status(404).json(err);
    })
})

module.exports=router;