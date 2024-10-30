const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    discount:
       {
         type: Number,
         default: 0
       },
    price: Number,
    picture: String,
    bgcolor: String,
    panelcolor: String,
    textcolor: String
})

modules.export = mongoose.model("product", productSchema)