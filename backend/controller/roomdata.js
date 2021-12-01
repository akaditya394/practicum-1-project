const User = require("../models/user");
const mongoose = require("mongoose");
const Room = require("../models/room");
const { findById } = require("../models/user");

exports.getRoomData = (req,res)=>{
    const id = req.params.id

    Room.findById(id, function(err,data){
        if(err){console.log(err)
        } else{
        res.send(data)
        }
    })
}