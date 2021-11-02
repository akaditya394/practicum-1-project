const User = require("../models/user");
const mongoose = require("mongoose");
const Room = require("../models/room");
const findOrCreate = require("mongoose-findorcreate");

exports.createRoom = (req, res) => {

  // console.log(req.body)
  const {roomInfo} = req.body; 
  // console.log(roomInfo)

  // Data from front-end googleId, roomname, purpose, members
  // console.log(req.body)

  // Using fixed googleId for testing
  const sub = req.body.googleId;
  const query = { googleId: sub };


  // Create room
  Room.create(query, (err, user) => {
    // console.log("I was here");
    if (!err) {

      // Static members for now, will be replace buy req.body.roomInfo.members
      const members = roomInfo.members;

      //  Static data, will be replaced by req.body.name and .purpose
      // const name = "Test 2 room";
      // const purpose = "Creating room 2";

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
                        // !err && console.log("User update");
                      });
                }
            })
        })

// will be replaced
     

    // Data to Mongodb
      Room.findOneAndUpdate(query, { $set: roomInfo }, (err, data) => {
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
