let {product_model}=require('../Models/products.model');
let {order_model}=require('../Models/orders.model');
class product_controller{
    schema;
    constructor(){
        this.schema=product_model;
    }
    create_product(product){
        return this.schema.create(product).then(()=>{
            console.log("Product created successfully")
        }).catch((err)=>{
            console.log("Error creating Product",err)
        })
    }
    update_product(product,id){
        return this.schema.update(product,{where:{id:id}}).then(()=>{
            console.log("Product updated successfully")
        }).catch((err)=>{
            console.log("Error updating Product",err)
        })
    }
    delete_product(id){
        return this.schema.destroy({
            where:{
                id:id
            }
        }).then(()=>{
            console.log("Product deleted successfully")
        })
    }
    fetch_product(id,orders){
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
    fetch_all_product(limit=null,orderbycol='created_at',orderbyseq='asc'){
        return this.schema.findAll({
            limit:limit,
            order:[
                [orderbycol,orderbyseq]
            ]
        });
    }
    #create_order_model_include(){
        return {
            //required set to true will only work if product has a order
            //setting it to false will include the product even if the product doesn't have a order
            required:false,
            model:order_model
        }
    }
}

let product_controller_object=new product_controller();
module.exports={product_controller_object};