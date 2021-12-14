const User = require("../models/user");
const mongoose = require("mongoose");
const Room = require("../models/room");
const findOrCreate = require("mongoose-findorcreate");

exports.createRoom = (req, res) => {
  // console.log(req.body);
  const { roomInfo } = req.body;

  // Data from front-end googleId, roomname, purpose, members
  // console.log(req.body)

  // Using fixed googleId for testing
  const sub = req.body.googleId;
  const query = { googleId: sub };

  const room = new Room({
    googleId: sub,
    ...roomInfo,
  });

  const members = roomInfo.members;

  room.save(function (err, user) {
    if (err) {
      res.send(err);
    } else {
      // Adding room Id to members DB
      members.forEach((member) => {
        User.findOne({ email: member }, function (err, data) {
          if (err) {
            console.log(err);
          } else if (data) {
            const roomMember = data.roomMember;
            roomMember.push(user._id);

            User.findOneAndUpdate(
              { email: member },
              { $set: { roomMember: roomMember } },
              (err, data) => {}
            );
          } else if (!data) {
            // Do something with no data
            
          }
        });
      });

      //  Adding roomId to host DB
      User.findOne(query, function (err, doc) {
        if (err) {
          console.log(err);
        } else {
          const rHost = doc.roomHost;
          const existHost = rHost.includes(user._id);
          !existHost && rHost.push(user._id);
          const update = { roomHost: rHost };

          User.findOneAndUpdate(query, update, function (err, data) {
            if (err) {
              console.log(err);
            } else {
            }
          });
        }
      });

      // res.send(user);
    }
  });

  // Create room
  // Room.create(query, (err, user) => {
  //   // console.log("I was here");
  //   if (!err) {
  //     // Static members for now, will be replace buy req.body.roomInfo.members
  //     const members = roomInfo.members;

  //     //  Static data, will be replaced by req.body.name and .purpose
  //     // const name = "Test 2 room";
  //     // const purpose = "Creating room 2";

  //     // Adding room id to this roommembers Database
  //     members.forEach((member) => {
  //       User.findOne({ email: member }, function (err, data) {
  //         if (err) {
  //           console.log(err);
  //         } else if (data) {
  //           const roomMember = data.roomMember;
  //           roomMember.push(user._id);

  //           User.findOneAndUpdate(
  //             { email: member },
  //             { $set: { roomMember: roomMember } },
  //             (err, data) => {}
  //           );
  //         }
  //       });
  //     });

  //     // will be replaced

  //     // Data to Mongodb
  //     Room.findOneAndUpdate(query, { $set: roomInfo }, (err, data) => {
  //       if (!err) {
  //         //  Adding room id to roomHost database
  //         User.findOne(query, function (err, doc) {
  //           if (err) {
  //             console.log(err);
  //           } else {
  //             const rHost = doc.roomHost;
  //             const existHost = rHost.includes(data._id);
  //             !existHost && rHost.push(data._id);
  //             const update = { roomHost: rHost };

  //             User.findOneAndUpdate(query, update, function (err, data) {
  //               if (err) {
  //                 console.log(err);
  //               } else {
  //               }
  //             });
  //           }
  //         });

  //         res.send(data);
  //       }
  //     });
  //   } else {
  //     console.log(err);
  //   }
  // });
};
