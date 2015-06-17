var User = require('../models/user');

module.exports = function(req, res, next){
  if (req.params.username) {
    var userName = req.params.username.toLowerCase();
    if (userName === "sean") {
      User.findOne({ name: "Sean" }, function(err, user){
        req.session.user = user;
        req.session.save(function(){
          next();
        });
      });
    } else if (userName === "kan") {
      User.findOne({ name: "Kan" }, function(err, user){
        req.session.user = user;
        req.session.save(function(){
          next();
        });
      });
    } else { 
      next(); 
    }
  }
  else if (req.session.user) {
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