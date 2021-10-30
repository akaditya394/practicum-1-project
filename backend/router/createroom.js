const express = require("express");
const router = express.Router();

const { createRoom} = require("../controller/createroom")

router.post("/createroom", 
     createRoom
    

)



module.exports = router;