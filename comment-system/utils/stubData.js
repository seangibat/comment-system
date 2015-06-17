var Post = require('../models/post');
var User = require('../models/user');

module.exports = function(){
  Post.findOne({ parentId: null }, function(err, post){
    if (!post){
      var post = new Post({ body: "Sample top post.", author: "Sean" });
      post.save(function(err, post){
        console.log("Created stub post.")
      });
    } else {
      console.log("Stub post already created.");
    }
  });

  User.findOne({ name: "Sean", votes: {} }, function(err, user){
    if (!user){
      var user = new User({ name: "Sean" });
      user.save();
    }
  });

  User.findOne({ name: "Kan", votes: {} }, function(err, user){
    if (!user){
      var user = new User({ name: "Kan" });
      user.save();
    }
  });
};