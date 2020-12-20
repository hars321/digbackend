const con = require("../startConnection");


function findUser(data){
    return new Promise(function(resolve,reject){
    var email=data.email;
    var password=data.password;
    
    var qry=`SELECT id,name from \`user\` where \`email\`=\"${email}\" AND \`password\`=\"${password}\"`;
    con.query(qry,function(err,result,fields){
        
        if(result.length===0){
            reject('error');
        }
        else if(err){
            reject(err);
        }
        else{
            var data=result[0];
            resolve(data);
            
            
        }
    })
})
}

module.exports.findUser=findUser;