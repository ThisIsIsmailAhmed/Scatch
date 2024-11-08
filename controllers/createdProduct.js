const express = require('express');
const multer = require('multer');
const productModel = require('../models/product-model')
const dbgr = require('debug')('development:product-creation')

module.exports.createdproduct = async (req, res) => {
    const {
        name,
        discount,
        price,
        picture,
        bgcolor,
        panelcolor,
        textcolor,
    } = req.body;
    
   try{
    const createdProduct = await productModel.create({
        image: req.file.buffer,
        name,
        discount,
        price,
        picture,
        bgcolor,
        panelcolor,
        textcolor,
    })
    req.flash("success", "product created successfully")
    res.redirect('/owners/admin')
   }catch(err){
     if(err) dbgr(`This is the error ${err}`) 
   }

}