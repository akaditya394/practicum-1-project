const express = require("express")
const cors = require("cors")
require("dotenv").config()
require("./db/connectDB");

const app = express();

const authRoutes = require("./router/auth")
const createroomRoutes = require("./router/createroom")

app.use(express.json())
app.use(cors());


app.use("/auth",authRoutes);
app.use("/createroom",createroomRoutes);

const port = process.env.PORT;
app.listen(port,()=>{
    console.log("Server is running at "+port)
})