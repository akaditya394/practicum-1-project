const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const findOrCreate = require("mongoose-findorcreate");
const mongoose = require("mongoose");

const client = new OAuth2Client(
  "592271674414-4qc7458fee6pb9a6r6iq6qlmpplsb7sv.apps.googleusercontent.com"
);

exports.googleLogin = (req, res) => {
  const { tokenId } = req.body;

  console.log("Here 1");
  client
    .verifyIdToken({
      idToken: tokenId,
      audience:
        "592271674414-4qc7458fee6pb9a6r6iq6qlmpplsb7sv.apps.googleusercontent.com",
    })
    .then((response) => {
      // sub = googleId
      const { sub, name, email } = response.payload;
     
      console.log("here 7");


      let password = email + process.env.JWT_ACC_KEY;

      const query = { googleId: sub };
      User.findOrCreate(query, (err, user) => {
        console.log("I was here");
        if (!err) {
          const roomMember = [
            "abc1@gmail.com",
            "xyz2@gmailcom",
            "xyz2@gmailcom",
            "xyz2@gmailcom",
          ];
          const roomHost = ["Something 1", "Something 2", "Something 2"];

          console.log("wrong here 2");
          const newUser = {
            name: name,
            email: email,
            password: password,
            roomMember: roomMember,
            roomHost: roomHost,
          };

          User.findOneAndUpdate(query, { $set: newUser }, (err, data) => {
            !err && console.log("User update");
          });
          res.send(response);
        } else {
          console.log("wrong here 1");
          console.log(err);
          res.send(err);
        }
      });
    })
    .catch((err) => {
      console.log(err);
      console.log("Worng here 5");
    });


};
