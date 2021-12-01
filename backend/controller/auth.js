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

  // console.log("Here 1");
  client
    .verifyIdToken({
      idToken: tokenId,
      audience:
        "592271674414-4qc7458fee6pb9a6r6iq6qlmpplsb7sv.apps.googleusercontent.com",
    })
    .then((response) => {
      // sub = googleId
      const { sub, name, email } = response.payload;

      // console.log("here 7");

      User.findOne({email: email}, function (err,data){

        if (!data) {
          let password = email + process.env.JWT_ACC_KEY;
  
          const query = { googleId: sub };
          User.findOrCreate(query, (err, user) => {
            // console.log("I was here");
            if (!err) {
              // static room info for testing
              const roomMember = [];
              const roomHost = [];
  
              // console.log("wrong here 2");
              const newUser = {
                name: name,
                email: email,
                password: password,
                roomMember: roomMember,
                roomHost: roomHost,
              };
  
              // uploading to database
              User.findOneAndUpdate(query, { $set: newUser }, (err, data) => {
                // !err && console.log("User update");
              });
              res.send(response);
            } else {
              // console.log("wrong here 1");
              console.log(err);
              res.send(err);
            }
          });
        } else {
          res.send(response)
        }
      })

      
    })
    .catch((err) => {
      console.log(err);
      // console.log("Worng here 5");
    });
};
