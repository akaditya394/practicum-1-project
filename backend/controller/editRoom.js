const User = require("../models/user");
const mongoose = require("mongoose");
const Room = require("../models/room");
const findOrCreate = require("mongoose-findorcreate");

const axios = require('axios');


exports.editRoom = (req, res) => {
    // console.log(req.body)

    const { roomId, allMembers, newMembers, removedItems } = req.body;

    // console.log(roomId)
    // console.log(allMembers)
    // console.log(newMembers)
    // console.log(removedItems)

    Room.findOneAndUpdate(
        { _id: roomId },
        { $set: { members: allMembers } },
        (err, data) => { }
    );

    newMembers.forEach(member => {
        User.findOne({ email: member }, function (err, data) {
            if (err) {
                console.log(err);
            } else if (data) {
                const roomMember = data.roomMember;
                roomMember.push(roomId);

                User.findOneAndUpdate(
                    { email: member },
                    { $set: { roomMember: roomMember } },
                    (err, data) => { }
                );
            }
        });
    });


    removedItems.forEach(email => {
        axios.post("http://localhost:4000/editroom/remove", {
            roomId: roomId,
            email: email
        })
            .then((response) => {
                // console.log(response);
                console.log("removed")

            })
            .catch(err => console.log("Some error in post "))
            ;

    })



    res.send(true)
};