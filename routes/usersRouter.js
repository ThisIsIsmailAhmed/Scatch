const express = require("express");
const router = express.Router();
let {registerUser} = require('../controllers/authController')
let { loginController} = require("../controllers/loginController");

router.get("/", function (req, res) {
  res.send("hey");
});

router.post('/register', registerUser);

router.post('/login', loginController)

module.exports = router;