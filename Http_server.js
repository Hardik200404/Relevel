let http=require('http');
function getusers(){
    return [
        {
            name:"Hardik",
            age:25
        },
        {
            name:"Chikki",
            age:22
        },
    ];
}
let reqlistener=function(req,res){
    //console.log(req);
    if(req.url==='/users'){
        res.setHeader('content-type','application/json');
        //res.setHeader('content-type','text/csv');
        res.writeHead(200);
        res.end(JSON.stringify(getusers()));
    }else if(req.url==='/'){
        res.writeHead(200);
        res.end("Hello World!");
    }else{
        res.writeHead(400);
        res.end("Error");
    }
}
const server=http.createServer(reqlistener);
server.listen(8080);