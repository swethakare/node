var http = require('http');
var fs = require('fs');

const data = "Hello Swetha"
//create a server object:
http.createServer((req, res)=> {
  fs.writeFile('./new.html',data,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("file created sucessfully...!!");
    }
  })
  fs.appendFile('./new.html','\n She will find a job',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("append success!");
    }
  })
  fs.rename('./new.html','new.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('rename was success..!!');
    }
  })
  fs.unlink('./new.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("deleted");
    }
  })
  fs.readFile('./temp.html',(err,data)=>{
  res.write(data); //write a response to the client
  res.end(); //end the response
  })
}).listen(8080); //the server object listens on port 8080
