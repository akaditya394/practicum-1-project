// Port http://localhost:4000/editroom/remove
// Port http://localhost:4000/editroom/edit

const express = require("express");
const router = express.Router();

const { removeRoom } = require("../controller/removeroom");
const {editRoom} = require("../controller/editRoom")

// removeRoom function call
router.post("/remove", removeRoom);

router.post("/edit",editRoom);

module.exports = router;
