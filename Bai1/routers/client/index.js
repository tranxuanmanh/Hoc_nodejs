const products=require("./products");
const home=require("./home");
module.exports=(app)=>{
    app.use("/home",home);
    app.use("/product",products);
}