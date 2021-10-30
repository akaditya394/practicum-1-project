const User = require("../models/user");
const mongoose = require("mongoose");
const Room = require("../models/room");
const findOrCreate = require("mongoose-findorcreate");

exports.createRoom = (req, res) => {

  // Data from front-end googleId, roomname, purpose, members
  console.log(req.body)

  // Using fixed googleId for testing
  const sub = "101112739459253298835";
  const query = { googleId: sub };

  // Create room
  Room.findOrCreate(query, (err, user) => {
    // console.log("I was here");
    if (!err) {

      // Static members for now, will be replace buy req.body.roomInfo.members
      const members = ["123@gmail.com", "456@gamil.com", "bhaveshgupta802@gmail.com"];

      //  Static data, will be replaced by req.body.name and .purpose
      const name = "Test 1 room";
      const purpose = "Creating room";

      // Adding room id to this roommembers Database
        members.forEach((member)=>{
            User.findOne({email: member},function(err,data){
                if(err){
                    console.log(err)
                } else if(data) {
                    // console.log(data)
                    const roomMember = data.roomMember;
                    roomMember.push(user._id);
                    // console.log(roomMember)
                    User.findOneAndUpdate({email: member}, { $set: {roomMember: roomMember} }, (err, data) => {
                        !err && console.log("User update");
                      });
                }
            })
        })

// will be replaced
      const newRoom = {
        name: name,
        purpose: purpose,
        members: members,
      };

    // Data to Mongodb
      Room.findOneAndUpdate(query, { $set: newRoom }, (err, data) => {
        if (!err) {
          // console.log("Updated room");
        //   console.log(data);

        //  Adding room id to roomHost database
          User.findOne(query, function (err, doc) {
            if (err) {
              console.log(err);
            } else {
            //   console.log(doc);
              const rHost = doc.roomHost;
              const existHost = rHost.includes(data._id)
              !existHost && rHost.push(data._id);
              const update = { roomHost: rHost };

              User.findOneAndUpdate(query, update, function (err, data) {
                if (err) {
                  console.log(err);
                } else {
                  // res.send("Data updated");
                  // console.log("User host set");
                }
              });
            }
          });

          res.send(data);
        }
      });
      // console.log("Test complete");
    } else {
      //   console.log("wrong here 1");
      console.log(err);
    }
  });
};
