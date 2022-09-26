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
    fetch_user(id){
        return this.schema.findOne({
            where:{
                id:id
            }
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
}

let user_controller_object=new user_controller();
module.exports={user_controller_object};