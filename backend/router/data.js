const express = require("express");
const router = express.Router();

const { getData } = require("../controller/data");

// createroom function call
router.get("/:id", getData);

module.exports = router;
