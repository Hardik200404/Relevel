let user_controller=require('./controllers/user.controller.js');
let product_controller=require('./controllers/product.controller.js');
let order_controller=require('./controllers/order.controller.js');
let execute= require('./sequelize_connection');
//lets use the defined functions in user controller
//add user
// let user1=user_controller.user_controller_object.create_user({
//     user_name:'jkl',
//     email:'jkl@gmail.com'
// })
//this needs to be executed with sync so we add further code in sequelize_connection.js
//and pass the user1
//execute.execute_with_sync(user1)

// //update user by id
// let id=1
// let new_user_value={
//     user_name:'abc_updated'
// }
// let result=user_controller.user_controller_object.update_user(new_user_value,id)
// execute.execute_with_sync(result);

// //fetch all users
// //let result=user_controller.user_controller_object.fetch_all_user(4,'email','desc')
// let user_results=user_controller.user_controller_object.fetch_all_user()
// .then((data)=>{
//     return data.map((user)=>user.dataValues)
// }).then((data)=>{
//     data.forEach((user)=>{
//         console.log(user);
//     })
// })
// execute.execute_with_sync(user_results);

//fetch user by id
// let id=2;
// let result=user_controller.user_controller_object.fetch_user(id)
// .then((user)=>{
//     console.log(user.dataValues)
// })
// execute.execute_with_sync(result);

// //fetch all products
// let product_results=product_controller.product_controller_object.fetch_all_product()
// .then((data)=>{
//     return data.map((product)=>product.dataValues)
// }).then((data)=>{
//     data.forEach((product)=>{
//         console.log(product);
//     })
// })
// execute.execute_with_sync(product_results);

//fetch all products
let orders_results=order_controller.order_controller_object.fetch_all_order()
.then((data)=>{
    return data.map((order)=>order.dataValues)
}).then((data)=>{
    data.forEach((order)=>{
        console.log(order);
    })
})
execute.execute_with_sync(orders_results);
