const express = require("express")
const cors = require("cors")
require("dotenv").config()
require("./db/connectDB");

const axios = require('axios')

const { v4: uuidv4 } = require("uuid");


const app = express();

const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log("Server is running at " + port)
})

const io = require('socket.io')(server, {
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
app.use("/auth", authRoutes);
app.use("/createroom", createroomRoutes);
app.use("/data", dataRoutes);
app.use("/roomdata", roomDataRoutes);
app.use("/editroom", editroomRoutes);


// Meet code

app.set("view engine", "ejs");


const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
  debug: true,
});

app.use("/peerjs", peerServer);
app.use(express.static("public"));


const getRoomDataCall = (id) => {
  try {
    return axios.get("http://localhost:4000/roomdata/" + id)
  } catch (error) {
    console.error(error)
  }
}


app.get("/", (req, res) => {
  console.log("Here 1")

  res.redirect(`/${uuidv4()}`);
});

app.get("/:room/:google/:type", (req, res) => {
  console.log("Here 3")

  const IDRoom = req.params.room;
  const MemberEmail = req.params.google;
  const Type = req.params.type;
  console.log(IDRoom)
  console.log(MemberEmail)


  const getRoomData = async (Id) => {
    const breeds = getRoomDataCall(Id)
      .then(response => {
        if (response.data) {
          // console.log(res.data)
          const memberArray =response.data.members;
          if (Type && MemberEmail == response.data.googleId) {
            res.redirect("/" + IDRoom)

          }
          if (!Type&& memberArray.includes(MemberEmail) ){
            res.redirect("/" + IDRoom)

          } else {
            res.send("Unauthories access")
          }
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  getRoomData(IDRoom)

})

app.get("/:room", (req, res) => {
  console.log("Here 2")
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

