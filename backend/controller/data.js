const User = require("../models/user");
const mongoose = require("mongoose");
const Room = require("../models/room");



exports.getData = (req, res) => {

    const googleId = req.params.id;
    const query = { googleId: googleId }
    User.findOne(query, function (err, data) {
        if (!err) {
            if (data) { res.send(data); }
            else {
                const q = {email: googleId}
                User.findOne(q,function(e,d){
                    if(!e){
                        res.send(d);
                    }  else {
                        console.log(e);
                    }                  
                })
            }

        } else {
            console.log(err)
        }
    })

}