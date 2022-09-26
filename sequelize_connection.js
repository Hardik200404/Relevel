let {Sequelize}=require('sequelize');
function connectdb(){
    let seq=new Sequelize('ecommerce','root','Greyline@20',{
        host:'localhost',
        port:3306,
        dialect:'mysql',
        define:{
            timestamps:false
        }
        //defining timestamp false will avoid adding created and updated at by default
    });

    seq.authenticate().then(()=>{
        console.log("Successfully Connected");
    }).catch((err)=>{
        console.log("Error Connecting",err);
    })
    return {seq}
}
let {seq}=connectdb();
function execute_with_sync(promiseCallBack){
    seq.sync().then(()=>promiseCallBack);
}
module.exports={seq,execute_with_sync};