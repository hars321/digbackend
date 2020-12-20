const mysql=require('mysql');

const host = "bpleoxqevitlchss7bos-mysql.services.clever-cloud.com";

// Get the User for DB from Environment or use default
const user = "u75vosge7hmb9ywn";

// Get the Password for DB from Environment or use default
const password = "tLcQ2eKL9A2q4Ts0Jso9";

// Get the Database from Environment or use default
const database = "bpleoxqevitlchss7bos";


const con = mysql.createConnection({
    host, user, password, database,
  });

con.connect(function (err) {
      if(err){
          console.log("cannot connect to the database");
      }
      else{
          console.log("connected successfully");
      }    
  })

  
  
  module.exports=con;
  