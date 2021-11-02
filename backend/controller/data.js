const User = require("../models/user");
const mongoose = require("mongoose");
const Room = require("../models/room");



exports.getData = (req, res) => {

    const googleId = req.params.id;
    const query = {googleId: googleId}
    User.findOne(query, function(err,data){
        if(!err){
        res.send(data);
        } else {
            console.log(err)
        }
    })

}