const request = require('request');

const app = "test1592499168238";
const path = "/convbot";
const url = "https://io.datasync.orange.com/datasync/v2/"+app+"/data/"+path;
//Promise to read data asynchronously


const readData = new Promise((resolve, reject) => {
  request(url, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    // console.log(body['-ME2XLOyIGQbZD679bIw']);
    let user = [];
    var messengerUserLength = 0;
    for(var el in body){
        // console.log(el);
        // console.log( body[el]);
        // console.log(parseInt(body[el].no));
        //console.log(body[el])
        if(body[el].platform == "messenger"){
          if(!user[body[el]["user_id"]]){
            user[body[el]["user_id"]] = [];
            messengerUserLength ++;
          }
          user[body[el]["user_id"]].push(body[el]);
        } 
    }
    var resolveData = {
      user : user,
      length : messengerUserLength
    };
    resolve(resolveData)
  });
});

readData.then((value)=>{
  let uniqueUsers = value.length;
  console.log(value.user)
});





// Get the size of an object

/*
    for(var oneUserData of body ){
    if(oneUserData.platform == "messenger"){
      if(!user[oneUserData.user_id]){
        user[oneUserData.user] = [];
      }
      user[oneUserData.user_id].push(oneUserData.user);
    }
  }
*/