const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dbgr = require('debug')('development:login')


module.exports.loginController = async (req, res) => {
   let {email, password} = req.body;
   let user = await userModel.findOne({email});
   if (!user) {
    req.flash("error", "Email or Password incorrect");
    return res.redirect("/");
  }
  if(user){
    try{
let result = await bcrypt.compare(password, user.password);
   if(result){
    let token = jwt.sign({email: user.email, id: user._id}, process.env.JWT_KEY)
    res.cookie("token", token)
    res.redirect('/shop')
}else{
    res.status(401).send("something went wrong")
}
}catch(err){
   dbgr('something went wrong');
   res.status(500).send("something is incorrect")
}}else{
    res.status(401).send("The user is not registered")
   }
};