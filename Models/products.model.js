let {seq}=require('./../sequelize_connection.js');
let {DataTypes}=require('sequelize');
let {order_model}=require('./orders.model');
function define_product(){
    let product_model=seq.define('products',{
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
    //defining the product and order model join
    product_model.hasMany(order_model,{
        foreignKey:'product_id'
    })
    order_model.belongsTo(product_model,{
        foreignKey:'product_id'
    })

    return product_model
}

let product_model=define_product();
module.exports={product_model};