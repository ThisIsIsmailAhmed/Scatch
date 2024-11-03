const express = require('express');
const app = express();
let port = 3000;

const path = require('path');
const cookieParser = require('cookie-parser');
const db = require("./config/mongodb-config")
const indexRouter = require('./routes/index')
const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require("./routes/usersRouter"); 
const productsRouter = require("./routes/productsRouter");

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/', indexRouter)
app.use('/owners', ownersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(port, (err) => {
    if(err)  console.log(err);
});
