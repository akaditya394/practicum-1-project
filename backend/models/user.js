//  User schema

const mongoose = require("mongoose")
const findOrCreate = require('mongoose-findorcreate')
// const crypto = require("crypto")


const userSchema = new mongoose.Schema({
    googleId: String,
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false,
        unique: true 
    },
    password: {
        type: String,
        required: false
    },
    roomMember: [],
    roomHost: []
},{timestamps: true} )

userSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", userSchema)