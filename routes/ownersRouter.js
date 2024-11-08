const express = require("express");
const router = express.Router();
const ownerModel = require('../models/owner-model');
const bcrypt = require('bcrypt')
const {ownerRegistration} = require('../controllers/ownerController')
const {adminPanel} = require('../controllers/adminController')
const {isLoggedin} = require('../middlewares/isloggedin')
const {createdProduct} = require('../controllers/createdProduct')

if(process.env.NODE_ENV === "development"){
  router.post('/create', ownerRegistration);
}



router.get("/admin", isLoggedin , function adminPanel (req, res) {
  let success = req.flash("success")
  res.render("createproduct", {success})
 })

module.exports = router;