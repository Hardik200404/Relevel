let {define_order}=require('./../Models/orders.model.js');

class order_controller{
    schema;
    constructor(){
        this.schema=define_order();//this will trigger the function in user model
    }
    fetch_all_order(limit=null,orderbycol='created_at',orderbyseq='asc'){
        return this.schema.findAll({
            limit:limit,
            order:[
                [orderbycol,orderbyseq]
            ]
        });
    }
}

let order_controller_object=new order_controller();
module.exports={order_controller_object};