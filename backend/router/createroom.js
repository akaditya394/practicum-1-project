// Port http://localhost:4000/createroom/createroom

const express = require("express");
const router = express.Router();

const { createRoom } = require("../controller/createroom");

// createroom function call
router.post("/createroom", createRoom);

module.exports = router;
