const express = require("express");
const router = express.Router();

const {  googleLogin} = require("../controller/auth");

router.post("/googlelogin", googleLogin)


module.exports = router;
