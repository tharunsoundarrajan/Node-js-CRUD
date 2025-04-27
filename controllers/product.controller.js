const Product=require('../models/product.model');

const createproduct=async(req,res)=>{
  try {
    const user_creation = await Product.create(req.body);
    res.status(201).json(user_creation); //using 201 beacuse 201 status code is used when a new resource is created
  } catch (err) {
    res.status(500).json({ message: err.message }) //status code 500 is used for server error or internal error
  }
} 

const getproducts=async(req,res)=>{
    try{
        const products= await Product.find({});
        res.status(200).json(products);
      }
      catch(error){
        res.status(500).json({message:error.message});
      }
}

const getproduct=async(req,res)=>{
    try{
        const {id}=req.params;
        const product= await Product.findById(id);
        res.status(200).json(product);
        }
        catch(error){
          res.status(500).json({message:error.message});
        }
}

const updateproduct=async(req,res)=>{
    try{
        const{id}=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);
        if(!product){
         res.status(400).json({message: 'product not found'});
        }
        const updateproduct= await Product.findById(id);
        res.status(200).json(updateproduct);
       }
       catch(error){
         res.status(500).json({message:error.message});
       }
}

const deleteproduct=async(req,res)=>{
    try{
        const {id}=req.params;
        const product= await Product.findByIdAndDelete(id);
        if(!product){
         return res.status(404).json({message:'product not found'});
        }
        res.status(200).json({message:'product deletd'});
       }
       catch(error){
         res.status(500).json({message:error.message});
       }
}

module.exports={
createproduct,
getproducts,
getproduct,
updateproduct,
deleteproduct
}