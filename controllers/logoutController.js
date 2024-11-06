const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.logout = function logout (req, res){
   const {token} = req.cookies
    if(token){
        res.cookie('token', '');
    }
    res.redirect('/')
}