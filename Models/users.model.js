let {seq}=require('./../sequelize_connection.js');
let { DataTypes }=require('sequelize');
function define_user(){
    let test_user_model=seq.define('users',{
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
    return test_user_model
}
module.exports={define_user};