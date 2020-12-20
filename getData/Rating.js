const con = require("../startConnection");

function getRating(user_id,product_id){
    return new Promise(function(resolve,reject){
        let qry=`SELECT user.name, rating.stars FROM \`rating\` INNER JOIN \`user\` ON user.id = rating.user_id and rating.product_id = \"${product_id}\" and rating.user_id = \"${user_id}\"`;

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


module.exports.getRating=getRating;