const http = require('http');

const fs=require("fs");

const server=http.createServer((request,response)=>{

fs.readFile('./output.txt',(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Hello, World!");
    }

})
response.end();
})


// TODO: Create an HTTP server

// TODO: Listen on port 3000

// DO NOT EDIT BELOW THIS LINE (Uncomment it once you are done with your code)

