//express server

const express=require('express');
const app=express();

const bodyParser = require('body-parser')

const fs = require("fs");

const cors = require('cors');

const con = require('./startConnection.js');

const getData=require('./getData/getDataRoute');
const putData=require('./putData/putDataRoute');


app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
    
    next();
  });
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/getdata',getData);
app.use('/putdata',putData);

app.get('/',(req,res)=>{
    res.send("welcome");
})

app.get('/',(req,res)=>{
    res.send("welcome");
})


app.listen(4000,(req,res)=>{
    console.log('listening on 4000');
})
