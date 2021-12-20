const express = require("express")
const cors = require("cors")
require("dotenv").config()
require("./db/connectDB");
let app = express();



// meet new start
let server = require( 'http' ).Server( app );
let io = require( 'socket.io' )( server );
let stream = require( './ws/stream' );
let path = require( 'path' );
let favicon = require( 'serve-favicon' );
// meet new end 


const axios = require('axios')

const { v4: uuidv4 } = require("uuid");



const port = process.env.PORT;

//  server = app.listen(port, () => {
//   console.log("Server is running at " + port)
// })


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

// meet new start
app.use( favicon( path.join( __dirname, 'favicon.ico' ) ) );
app.use( '/assets', express.static( path.join( __dirname, 'assets' ) ) );

app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/index.html' );
} );


io.of( '/stream' ).on( 'connection', stream );


server.listen(port,()=>{
  console.log("Server is running on port " + port)
});


// meet new end