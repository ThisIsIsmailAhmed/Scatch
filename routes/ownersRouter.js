const express = require("express");
const router = express.Router();
const ownerModel = require('../models/owner-model');
const bcrypt = require('bcrypt')
const {ownerRegistration} = require('../controllers/ownerController')
const {isLoggedin} = require('../middlewares/isloggedin')

if(process.env.NODE_ENV === "development"){
  router.post('/create', ownerRegistration);
}


 router.get("/admin", isLoggedin ,function (req, res) {
  res.render("admin")
 })

module.exports = router;