var Post = require('../models/post.js');

var args = {
  recursive: true,
  allowEmptyChildren: false,
  options: { sort: '-score' }
};

exports.getThread = function(){
  Post.findById(req.params.threadId, function(err, threadParent){
    if (err) return next(err);

    threadParent.getChildrenTree(args, function(err, posts){
      if (err) return next(err);
      res.json(posts);
    });

  });
};

exports.getThreads = function(){

};

exports.createThread = function(){
  var thread = new Post({
    threadParent: true,
    body: req.body.postBody
  });
  
  thread.save(function(err, thread){
    if (err) return next(err);
    res.json(thread);
  });
};