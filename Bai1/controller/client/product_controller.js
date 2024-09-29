const Product=require('../../model/productModel')

module.exports.index=async (req,res)=>{
    const products=await Product.find({
        status:'active'
        ,deleted:false
    });

    console.log(products);
    res.render("client/pages/product/index",{
        title:"Trang danh sach san pham",
        products:products
    })
}
module.exports.create=(req,res)=>{
    res.send("Them san pham moi "+req.params.id)
}
module.exports.update=(req,res)=>{
    res.send("Update san pham moi "+req.params.id)
}
