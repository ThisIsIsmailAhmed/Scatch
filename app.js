const express = require('express');
const app = express();
let port = 3000;

const path = require('path');
const cookieParser = require('cookie-parser');
const db = require("./config/mongodb-config")

const ownersRouter = require('./routes/ownersRouter')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.set('view engine', 'ejs');

app.use('/owners', ownersRouter)

app.listen(port, (err) => {
    if(err)  console.log(err);
});
