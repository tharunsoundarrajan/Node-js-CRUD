const mongoose=require('mongoose');

const ProductSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Please provide name']
        },

        salary:{
            type:Number,
            required:true,
            default:0
        },

        address:{
            type:String,
            required:true,
            default:0
        }
    });

module.exports = mongoose.model("Products",ProductSchema);

//module.exports=product;