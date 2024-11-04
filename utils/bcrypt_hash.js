const bcrypt = require('bcrypt');
module.exports.passHash = async (password, salt_rounds) => { 
  return await bcrypt.hash(password, salt_rounds)
 };