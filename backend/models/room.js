// Room schema

const mongoose = require("mongoose")
const findOrCreate = require('mongoose-findorcreate')
// const crypto = require("crypto")


const roomSchema = new mongoose.Schema({
    googleId: String,
    name: String,
    purpose: String,
    members: []
},{timestamps: true} )

roomSchema.plugin(findOrCreate);

module.exports = mongoose.model("Room", roomSchema)