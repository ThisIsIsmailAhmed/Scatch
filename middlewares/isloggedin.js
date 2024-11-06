const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const userModel = require('../models/user-model');

let isLoggedin = async (req, res, next) => {
    if(!req.cookies.token){
    req.flash("error", "you need to login first");
    return res.redirect('/')
    }
   let token = req.cookies.token;
    try {
        let decoded = jwt.verify(token, process.env.JWT_KEY);
        let data =  await userModel.findOne({email: decoded.email}).select("-password");
        req.user = data
        next()
    } catch(err) {
        req.flash("error", "something went wrong")
        return res.redirect('/')
      }
}



module.exports.isLoggedin = isLoggedin;