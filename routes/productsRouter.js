const express = require("express");
const router = express.Router();
const upload = require('../config/multer-config');
const {isLoggedin} = require('../middlewares/isloggedin')
const {createdproduct} = require('../controllers/createdProduct')

router.get("/", function (req, res) {
  res.send("products page");
});

router.post('/create', isLoggedin, upload.single("image"), createdproduct )

module.exports = router;