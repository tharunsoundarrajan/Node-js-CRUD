const express=require('express');
const { createproduct, getproducts, getproduct, updateproduct, deleteproduct } = require('../controllers/product.controller');
const router=express.Router();

router.post('/',createproduct);
router.get('/',getproducts);
router.get('/:id',getproduct);
router.put('/:id',updateproduct);
router.delete('/:id',deleteproduct);


module.exports=router;