const readFile = require('./cat');
const curl = require("./curl")
const pwd = require('./pwd');
const ls = require('./ls');

// http://www.google.com
process.stdout.write("prompt > ");

process.stdin.on("data", (data)=>{
  let cmd = data.toString().trim();
  if(cmd==="ls"){
    ls();
  }if(cmd==="pwd"){
    pwd()
  }else{
    curl(cmd.toString().trim());
  }
})
