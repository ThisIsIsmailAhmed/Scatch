const express = require("express");
const router = express.Router();
const userModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

router.get("/", function (req, res) {
  res.send("hey");
});

router.post('/register', async (req, res) => {
  let {fullname, email, password} = req.body;
  let hashedPass = await bcrypt.hash(password, 10)
  let registeredUser = await userModel.create({
    fullname,
    email,
    password: hashedPass
  });

});

module.exports = router;