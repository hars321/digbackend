const con = require("../startConnection");

function getData(){
    return new Promise(function(resolve,reject){
        var qry=`SELECT * FROM \`product\`;`
        
        con.query(qry,function(err,result,fields){
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
    
}
function getProductWithId(id) {

    return new Promise(function (resolve,reject) {
        qry=`SELECT * FROM \`product\` where id=${id};`
        
        con.query(qry,function(err,result,fields){
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        });
    });

};

module.exports.getData=getData;
module.exports.getProductWithId=getProductWithId;