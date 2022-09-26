let {define_product}=require('./../Models/products.model.js');

class product_controller{
    schema;
    constructor(){
        this.schema=define_product();//this will trigger the function in product model
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
    fetch_product(id){
        return this.schema.findOne({
            where:{
                id:id
            }
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
}

let product_controller_object=new product_controller();
module.exports={product_controller_object};