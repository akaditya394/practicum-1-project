const express = require("express")
const cors = require("cors")
require("dotenv").config()
require("./db/connectDB");

const { v4: uuidv4 } = require("uuid");


const app = express();

const port = process.env.PORT;

const server = app.listen(port,()=>{
    console.log("Server is running at "+port)
})

const io = require('socket.io')(server,{
    cors: {
      origin: '*'
    }
  });


// router setup
const authRoutes = require("./router/auth")
const createroomRoutes = require("./router/createroom")
const dataRoutes = require("./router/data")
const roomDataRoutes = require("./router/roomdata.js")
const editroomRoutes = require("./router/edit.js");

app.use(express.json())
app.use(cors());

// router call
app.use("/auth",authRoutes);
app.use("/createroom",createroomRoutes);
app.use("/data",dataRoutes);
app.use("/roomdata",roomDataRoutes);
app.use("/editroom", editroomRoutes);


// Meet code

app.set("view engine", "ejs");


const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
  debug: true,
});

app.use("/peerjs", peerServer);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId, userName) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected", userId);
    socket.on("message", (message) => {
      io.to(roomId).emit("createMessage", message, userName);
    });
  });
});

