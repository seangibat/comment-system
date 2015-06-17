var Post = require('../models/post.js');

exports.createPost = function(req, res, next){
  Post.findById(req.body.parentId, function(err, parent){
    
    console.log(req.body);

    var post = new Post({
      body: req.body.postBody,
      author: req.session.user.name
    });

    parent.appendChild(post, function(err, child){
      if (err) return next(err);
      res.json(child);
    });

  });
};