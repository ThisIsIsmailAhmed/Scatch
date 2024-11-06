const ownerModel = require('../models/owner-model');
let { passHash } = require('../utils/bcrypt_hash')
let validator = require('../validators/owner_creation')
let dbgr = require('debug')('development:owner-controller');

module.exports.ownerRegistration =  async (req, res) => {
try{

let owner = await ownerModel.find();
    if(owner.length > 0){
     return res
     .status(503)
     .send("You dont have permission to create a new owner");
    }

let {email, fullname, password} = req.body;

let validation = await validator.validateAsync({fullname, email, password});

let hashedPass = await passHash(password, 10)

let createdOwner = await ownerModel.create({
     fullname,
     email,
     password: hashedPass,
})
res.status(201).send(createdOwner)
}catch(err){
  dbgr(err)
}
};   



