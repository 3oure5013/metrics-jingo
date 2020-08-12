const express = require("express");
const appaxpress = express();
const host = "localhost";
const port = 8080

appaxpress.get('/', (req, res)=>{
  res.json("I'm ok for now");
});


appaxpress.listen(port, host, ()=>{
  console.log("App listen on " + port)
})