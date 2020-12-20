
function generateUserId(){
    var d = new Date();
    var n = d.getTime();
    var id=n.toString();
    return id;
}
exports.generateUserId=generateUserId;