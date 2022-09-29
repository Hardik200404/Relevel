let {seq}=require('./../sequelize_connection.js');
let { DataTypes }=require('sequelize');
let { order_model }=require('./orders.model');
function define_user(){
    let user_model=seq.define('users',{
        id:{
            type:DataTypes.BIGINT,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        user_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        user_password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        created_at:{
            //with date, it will consider data and time, for only date, use dateonly
            type:DataTypes.DATE,
            defaultValue:seq.fn('NOW'),
        }
    });
    
    //defining the user and order model join
    user_model.hasMany(order_model,{
        foreignKey:'user_id'
    })
    order_model.belongsTo(user_model,{
        foreignKey:'user_id'
    })

    return user_model
}
module.exports={define_user};