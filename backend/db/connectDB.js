// Database connect

const mongoose = require("mongoose")



const url =
  "mongodb+srv://dbBhavesh:UHUfiCjsaosXtXe8@practicum1.zjcx3.mongodb.net/practicum1?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true 
}).then(()=> console.log("DB connected"))
.catch(err=>console.log("Db not connected "+err))

// mongoose.set('useFindAndModify', false);
