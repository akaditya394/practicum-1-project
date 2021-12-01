const User = require("../models/user");
const mongoose = require("mongoose");
const Room = require("../models/room");
const findOrCreate = require("mongoose-findorcreate");

exports.removeRoom = (req,res) => {
    const {email, roomId} = req.body;
    // console.log(email);
    // console.log(roomId);

    User.findOne({ email: email }, function(err,data){
        if (err) {
            console.log(err);
          } else if (data) {

            const roomMember = data.roomMember;
            
            var filteredAry = roomMember.filter(e => e != roomId)

            User.findOneAndUpdate(
              { email: email },
              { $set: { roomMember: filteredAry } },
              (err, data) => {}
            );
          }
    })


    Room.findById(roomId,function(err,data){
        if(err){console.log(err)
        } else{
            var members = data.members;
            var filteredAry = members.filter(e => e != email)

            Room.findOneAndUpdate(
                { _id: roomId },
                { $set: { members: filteredAry } },
                (err, data) => {}
              );

        }
    })
    res.send(true)
};