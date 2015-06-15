var Post = require('../models/post.js');

exports.getPost = function(req, res, next){
  Post.findById(req.body.parentId, function(err, parent){
    if (err) return next(err);
  });
};

exports.createPost = function(req, res, next){
  Post.findById(req.body.parentId, function(err, parent){
    
    var post = new Post({
      body: req.body.postBody
    });

    post.parent = parent;
    
    parent.save(function(err){
      if (err) return next(err);
      post.save(function(err, post){
        if (err) return next(err);
        res.json(post);
      });
    });

  });
};