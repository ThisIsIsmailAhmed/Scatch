const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullname:{ 
        type: String,
        minLength: 3,
        trim: true,
    },
    email: String,
    password: String,
    contact: Number,
    picture: String,
    gstin: String
})

modules.export = mongoose.model("owner", ownerSchema)