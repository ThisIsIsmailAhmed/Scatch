const userModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const auth_schema = require('../validators/auth_schema')
const {generateToken} = require('../utils/jwt_token')
const {passHash} = require('../utils/bcrypt_hash')
const env = require("dotenv").config()



module.exports.registerUser = async (req, res) => {
    let {fullname, email, password} = req.body;
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
      res.send(registeredUser)
      }catch(err){
         res.status(418).send(err.details ? err.details.message : "something went wrong")
       }
  }