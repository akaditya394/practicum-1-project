require("dotenv").config();
const express = require("express");
const ejs = require("ejs");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const cors = require("cors");

// All required packeges

const authRoutes = express.Router();

// app created
const app = express();

app.set("view engine", "ejs");

app.use(cors());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(bodyParser.json());


// Passport session Config
app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport session Start
app.use(passport.initialize());
app.use(passport.session());

// MongoDB connection
const url = process.env.MONGO_URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useFindAndModify", false);

// GoogleId when register/login with google. Other two for local register/login.
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
  secret: String,
});

// Schema Plugins
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// Mongoose model
const User = mongoose.model("User", userSchema);

// Passport create strategy
passport.use(User.createStrategy());

// Passport Serialize deserialize
// Two ways
// 1. For local register/login - short method at npm docs
// 2. For google register/logi - Long method at passport docs configure
// 2nd used
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

let userProfile;

// Google strategy Oauth2
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:4000/auth/google/logged",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    function (accessToken, refreshToken, profile, cb) {
      // console.log(profile);
      userProfile = profile;

      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

app.get("/", (req, res) => {
  res.render("auth");
});

// Authentication route when click on google button
// authRoutes.route("/auth/google").get((req, res) => {
//   passport.authenticate("google", { scope: ["profile"] });
// });

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

// Google send req after authentication success
app.get(
  "/auth/google/logged",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    // res.redirect("http://localhost:3000/profile");
    res.send(userProfile);
  }
);

// Logout button detele session history and logout the user from both google and local login
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

authRoutes.route("auth/google/").post((req,res)=>{
  res.redirect("/auth/google")
})

app.listen(4000, function () {
  console.log("Server started on port 4000");
});
