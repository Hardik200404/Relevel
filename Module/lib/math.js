let add=function(a,b){
    return a+b;
}
let subtract=function(a,b){
    return a-b;
}

//Two ways to get the desired functions into exports object
module.exports={sum:add,sub:subtract};
// this.sum=add;
// this.sub=subtract;