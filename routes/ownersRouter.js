const express = require("express");
const router = express.Router();
const ownerModel = require('../models/owner-model');
const bcrypt = require('bcrypt')
const {ownerRegistration} = require('../controllers/ownerController')

if(process.env.NODE_ENV === "development"){
  router.post('/create', ownerRegistration);
}

router.get("/", function (req, res) {
  res.send("hey")
 })

module.exports = router;