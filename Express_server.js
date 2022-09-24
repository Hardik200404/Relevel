let express=require('express');
let app=express();

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
    //return 
}

app.get('/users',function(req,res){
    res.setHeader('content-type','application/json');
    let result=getusers();
    if(result){
        res.writeHead(200);
        res.end(JSON.stringify(result));
    }else{
        res.writeHead(500);
        res.end("Server Error");
    }
})
app.get('/',function(req,res){
    res.writeHead(200);
    res.end('Hello World!');
})

function getTickets(id=undefined){
    let fs=require('fs')
    let data=fs.readFileSync('tickets.json');
    if(id){
        return JSON.parse(data).filter((data)=>data.id==id)[0];
    }else{
        //return 
        return JSON.parse(data);
    }
}

function getTicketsNames(){
    let fs=require('fs')
    let data=fs.readFileSync('tickets.json');
    return JSON.parse(data).map((data)=>data.name);
}
app.get('/tickets/names',function(req,res){
    let result=getTicketsNames();
    if(result){
        res.setHeader("Content-type","application/json");
        res.writeHead(200);
        res.end(JSON.stringify(result));
    }else{
        res.writeHead(500);
        res.end("Error");
    }
})
app.get('/tickets',function(req,res){
    let result;
    if(req.query.age){
        result=getTickets().filter((data)=>data.age==req.query.age);
        res.setHeader("Content-type","application/json");
        res.writeHead(200);
        res.end(JSON.stringify(result));
    }
    result=getTickets();
    if(result){
        res.setHeader("Content-type","application/json");
        res.writeHead(200);
        res.end(JSON.stringify(result));
    }else{
        res.writeHead(500);
        res.end("Error");
    }
})
app.get('/tickets/:id',function(req,res){
    let result=getTickets(parseInt(req.params.id));
    if(result){
        res.setHeader("Content-type","application/json");
        res.writeHead(200);
        res.end(JSON.stringify(result));
    }else{
        res.writeHead(500);
        res.end("Error");
    }
})


//adding authorization before adding ticket method
//then in post method headers, it should contain username and password to be able to add ticket
app.use(function(req, res, next){
    if(req.headers['username']==='Hardik' && req.headers['password']==='Hardik@123'){
        next();
    }else{
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(401);
        res.end(JSON.stringify({status: "Not Authorized"}));
    }
});

//postmethod
function addTicket(data){
    let fs=require('fs')
    jsondata=JSON.parse(fs.readFileSync('tickets.json'));
    jsondata.push(data);
    fs.writeFileSync('tickets.json',JSON.stringify(jsondata));
    return true;
}
let bodyParser=require('body-parser');
app.use(bodyParser.json());
app.post('/tickets',function(req,res){
    let success=addTicket(req.body);
    if(success){
        res.setHeader('Content-type','application/json');
        res.writeHead(201);//created
        res.end(JSON.stringify({success:true}));
    }else{
        res.setHeader('Content-type','application/json');
        res.writeHead(500);
        res.end(JSON.stringify({success:false}));
    }
})
app.listen(8080,()=>{
    console.log("Application launched");
})