const { order_model } = require('../Models/orders.model.js');
let {define_user}=require('./../Models/users.model.js');

class user_controller{
    schema;
    constructor(){
        this.schema=define_user();//this will trigger the function in user model
    }
    create_user(user){
        return this.schema.create(user).then(()=>{
            console.log("User created successfully")
        }).catch((err)=>{
            console.log("Error creating User",err)
        })
    }
    update_user(user,id){
        return this.schema.update(user,{where:{id:id}}).then(()=>{
            console.log("User updated successfully")
        }).catch((err)=>{
            console.log("Error updating User",err)
        })
    }
    delete_user(id){
        return this.schema.destroy({
            where:{
                id:id
            }
        }).then(()=>{
            console.log("User deleted successfully")
        })
    }
    fetch_user(id,orders){
        let order_model_include=null;
        if(orders){
            order_model_include=this.#create_order_model_include();
        }
        return this.schema.findOne({
            where:{
                id:id
            },
            include:[order_model_include]
        })
    }
    fetch_all_user(limit=null,orderbycol='created_at',orderbyseq='asc'){
        return this.schema.findAll({
            limit:limit,
            order:[
                [orderbycol,orderbyseq]
            ]
        });
    }
    #create_order_model_include(){
        return {
            //required set to true will only work if user has a order
            //setting it to false will include the user even if the user doesn't have a order
            required:false,
            model:order_model
        }
    }
}

let user_controller_object=new user_controller();
module.exports={user_controller_object};