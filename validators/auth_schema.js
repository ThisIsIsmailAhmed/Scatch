const joi = require('joi');

let auth_schema = joi.object({
    fullname: joi.string().min(3).required(),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: joi.string().required()
})

module.exports = auth_schema;