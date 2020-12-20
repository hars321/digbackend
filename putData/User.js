const con = require("../startConnection");
const UserDetails=require('../getData/User');
const { generateUserId } = require("../generateIndex");

function putData(data){
    let id=generateUserId();
    let {name,email,password}=data;
    

    return new Promise(function(resolve,reject){
        
        //check if user exists
        let qry=`SELECT id, name from \`user\` where \`email\`=\"${email}\"`;
        
        con.query(qry,function(err,result,fields){
        
            if(result.length!==0){
                //result found do no register
                reject('User already exists');
            }
            else{
                let qry=`Insert into \`user\` (\`id\`,\`name\`,\`email\`, \`password\`) VALUES (\"${id}\",\"${name}\",\"${email}\",\"${password}\");`
                console.log(qry)
                con.query(qry,function(err,result,fields){
                    
                    if(err){
                        reject(err);
                    }
                    else{
                        console.log(data)
                        console.log(id)
                        resolve({name,id});
                    }

                })

            }
        })

    })
}
module.exports.putData=putData;