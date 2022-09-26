let {seq}=require('./../sequelize_connection.js');
let { DataTypes }=require('sequelize');
function define_product(){
    let test_product_model=seq.define('products',{
        id:{
            type:DataTypes.BIGINT,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        product_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        category:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        price:{
            type:DataTypes.BIGINT,
            allowNull:false,
        },
        created_at:{
            //with date, it will consider data and time, for only date, use dateonly
            type:DataTypes.DATE,
            defaultValue:seq.fn('NOW'),
        }
    });
    return test_product_model
}

module.exports={define_product};