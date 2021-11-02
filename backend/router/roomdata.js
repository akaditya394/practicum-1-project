const express = require("express");
const router = express.Router();

const { getRoomData } = require("../controller/roomdata");

// createroom function call
router.get("/:id", getRoomData);

module.exports = router;
