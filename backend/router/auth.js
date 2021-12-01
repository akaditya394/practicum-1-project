// Post = http://localhost:4000/auth/googlelogin

const express = require("express");
const router = express.Router();

const {  googleLogin} = require("../controller/auth");

// auth function call
router.post("/googlelogin", googleLogin)


module.exports = router;
