const userModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const auth_schema = require('../validators/auth_schema')
const {generateToken} = require('../utils/jwt_token')
const {passHash} = require('../utils/bcrypt_hash')
const env = require("dotenv").config()
const dbgr = require('debug')("development:userRegistration")


module.exports.registerUser = async (req, res) => {
    let {fullname, email, password} = req.body;
    let user = await userModel.findOne({email});
    if(user){
      dbgr("user already exists")
      res.status(401).send("you already have an account");
    }else{
      try{
      await auth_schema.validateAsync({ fullname, email, password })
      let hashedPass = await passHash(password, 10)
      let registeredUser = await userModel.create({
            fullname,
            email,
            password: hashedPass
          })
      let token = generateToken(registeredUser)    
      res.cookie("token", token)  
      res.redirect('/shop')
      }catch(err){
         res.status(418).send(err.details ? err.details.message : "something went wrong")
       }
  }
}