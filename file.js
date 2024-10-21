const fs=require('fs');


// sync
// fs.writeFileSync('./test.txt',"Hello Brother")

//Async

// fs.watchFile('./text.txt',"hELLO",(ERRO)=>{});

// Read Data

// const result=fs.readFileSync('./contacts.txt',"utf-8")

// console.log(result);




// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log('Error', err);
        
//     }else{
//         console.log('more mobile number'+result);
        
//     }
// })


fs.appendFileSync("./test.txt",`Hello brother\n`);




