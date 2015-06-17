var User = require('../models/user');

module.exports = function(req, res, next){
  if (req.params.username) {
    var userName = req.params.username;
    if (userName === "Sean") {
      User.findOne({ name: "Sean" }, function(err, user){
        req.session.user = user;
        next();
      });
    } else if (userName === "Kan") {
      User.findOne({ name: "Kan" }, function(err, user){
        req.session.user = user;
        next();
      });
    } else { 
      next(); 
    }
  }
  else if (req.session.user) {
    console.log(req.session.user);
    next();
  }
  else {
    if (Math.random() > .5) {
      User.findOne({ name: "Sean" }, function(err, user){
        req.session.user = user;
        next();
      });
    } else {
      User.findOne({ name: "Kan" }, function(err, user){
        req.session.user = user;
        next();
      });
    }
  }
};