const express = require("express");
const router = express.Router();
const ownerModel = require('../models/owner-model');
const bcrypt = require('bcrypt')

if(process.env.NODE_ENV === "development"){
  router.post('/create', async (req, res) => {
     let owner = await ownerModel.find();
     if(owner.length > 0){
      return res
      .status(503)
      .send("You dont have permission to create a new owner");
     }

let {email, fullname, password} = req.body;

let hashedPass = await bcrypt.hash(password, 10)

let createdOwner = await ownerModel.create({
      fullname,
      email,
      password: hashedPass,
})
res.status(201).send(createdOwner)
    
});   
  }

router.get("/", function (req, res) {
  res.send("hey");
});



module.exports = router;