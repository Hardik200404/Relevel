let fs=require('fs')

fs.readFiles('Setup.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
console.log("Hello")//Hello will be printed first,then the data

/*
//To make it work syncronusly use readfilesync, but it doesn't take 
//function as parameter
let data=fs.readFileSync('setup.txt','utf-8')
console.log(data)
console.log('Hello')
*/