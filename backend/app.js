require("dotenv").config();
const cors = require("cors")
const express = require("express");
const mongoose = require('mongoose');
const passport = require("passport");
const session = require("express-session");
const userRoutes = require("./routes/user")
const poultryRoutes = require("./routes/poultry")
const eggRoutes = require("./routes/egg")
const User = require("./models/User");

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "my little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/poultryDB")
  .then((res) => {
  console.log("Database Connected")
})

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});


//Routes
app.use("/user",userRoutes);
app.use("/poultry",poultryRoutes);
app.use("/egg",eggRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});
