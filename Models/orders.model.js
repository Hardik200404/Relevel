let {seq}=require('./../sequelize_connection.js');
let { DataTypes }=require('sequelize');
function define_order(){
    let test_order_model=seq.define('orders',{
        id:{
            type:DataTypes.BIGINT,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        product_id:{
            type:DataTypes.BIGINT,
            allowNull:false,
        },
        user_id:{
            type:DataTypes.BIGINT,
            allowNull:false,
        },
        quantity:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        payment:{
            type:DataTypes.FLOAT,
            allowNull:false,
        },
        created_at:{
            //with date, it will consider data and time, for only date, use dateonly
            type:DataTypes.DATE,
            defaultValue:seq.fn('NOW'),
        }
    });
    return test_order_model
}

module.exports={define_order};