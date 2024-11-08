const express = require('express');
const router = express.Router();
const {logout}= require('../controllers/logoutController')
const {isLoggedin} = require('../middlewares/isloggedin')
const productModel = require("../models/product-model")

router.get('/', async (req, res) => {
    let error = req.flash("error");
    res.render('index', {error})
});
router.get('/shop', isLoggedin ,async (req, res) => {
    let error = req.flash("error");
    let products = await productModel.find();
    res.render('shop',{error, products});
});
router.get('/logout', logout)

module.exports = router;