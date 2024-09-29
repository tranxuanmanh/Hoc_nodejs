const mongoose=require('mongoose')

const Schema=new mongoose.Schema({

    title: String,
    description: String,
    category: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    thumbnail: String,
    status:String ,
    position: Number,
    deleted:Boolean

})

const product=mongoose.model('product',Schema,'product')
module.exports=product