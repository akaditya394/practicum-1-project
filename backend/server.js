const express = require("express")
const cors = require("cors")
require("dotenv").config()
require("./db/connectDB");

const app = express();

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

const port = process.env.PORT;
app.listen(port,()=>{
    console.log("Server is running at "+port)
})