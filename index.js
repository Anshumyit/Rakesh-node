const http =require('http');
const fs=require('fs');
const { log } = require('console');
const url =require('url')

const myserver=http.createServer((req,res)=>{
    
    const log=`${Date.now()} :${req.url} New Req Received\n`;

    fs.appendFile("log.txt",log,(error1,data)=>{
        switch(req.url){
            case "/":res.end('Home pages')
            break
            case '/about':res.end('I am Raghuveer sonkar')
            break
            default:res.end('404 is not found')
        }

    })

    console.log(req.headers);
    // res.end('Server ending ')
    

})


myserver.listen(1000,()=>console.log('Server starting')
);