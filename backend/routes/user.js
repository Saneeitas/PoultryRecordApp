const router = require('express').Router();
const passport = require("passport");
const User = require("../models/User");

router.post('/signup',(req,res) => {
  User.register(
    { username: req.body.username },
    req.body.password,
    (err, user) => {
      if (err) {
        res.send(err) 
      } else {
        passport.authenticate("local")(req, res, () => {
          res.status(200).json({ success: "Signup Succesffuly" });
        });
      }
    }
  );
})

router.post('/signin',(req,res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  req.login(user, (err) => {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, () => {
        res.status(200).json({ success: "Login Successfully" });
      });
    }
  });
})

router.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) {
      return res.status(500).json({ error: "Logout failed" });
    }
    res.status(200).send("Success")
  });
});

module.exports = router;