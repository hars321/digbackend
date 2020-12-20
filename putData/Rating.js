const con = require("../startConnection");

function putData({product_id,user_id,stars}){
    return new Promise(function(resolve,reject){
        var qry=`INSERT INTO \`rating\` (\`product_id\`, \`user_id\`, \`stars\`) VALUES (\"${product_id}\",\"${user_id}\",\"${stars}\");`
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

function updateData({product_id,user_id,stars}){
    return new Promise(function(resolve,reject){
        var qry=`UPDATE \`rating\` SET \`stars\` = \"${stars}\" WHERE \`product_id\` = \"${product_id}\" and \`user_id\` = \"${user_id}\" ;`

        con.query(qry,function(err,result,fields){
            
            if(err || result.affectedRows==0){
                
                //insert as new element
                putData({product_id,user_id,stars})
                .then(data=>{
                    console.log(data);
                    resolve(data);
                })
                .catch(err=>{
                    console.log(err)
                    reject(err)})

            }
            else{
                resolve(result);
            }
        })
    })
}

module.exports.putData=putData;
module.exports.updateData=updateData;