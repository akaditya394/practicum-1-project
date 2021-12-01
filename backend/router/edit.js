// Port http://localhost:4000/editroom/remove
// Port http://localhost:4000/editroom/edit

const express = require("express");
const router = express.Router();

const { removeRoom } = require("../controller/removeroom");

// removeRoom function call
router.post("/remove", removeRoom);

module.exports = router;
