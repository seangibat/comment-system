var Post = require('../models/post.js');

exports.getThread = function(req, res, next){
  Post.findById(req.params.threadId, function(err, threadParent){
    if (err) return next(err);

    threadParent.getArrayTree(function(err, tree){
      if (err) return next(err);
      res.json(tree[0]);
    });
  });
};

/**
 * In the real world, the thread ID that corresponds with a particular page
   would be stored in a database somewhere with that page. Since this is only
   a demo, I'll be creating a sample thread upon server start. Since I don't 
   know what that thread's ID will be, I'm creating a temporary route
   that will return the first thread.
*/
exports.getFirstThread = function(req, res, next){
  Post.findOne({ parentId: null }, function(err, threadParent){
    if (err) return next(err);

    threadParent.getArrayTree({ sort: { score: 1 } }, function(err, tree){
      if (err) return next(err);
      tree[0].children.sort(function(a,b){
        if (a.score > b.score) return -1;
        if (a.score <= b.score) return 1;
      });
      res.json(tree[0]);
    });
  });
};

exports.createThread = function(req, res, next){
  var thread = new Post({
    body: req.body.postBody || ""
  });
  
  thread.save(function(err, thread){
    if (err) return next(err);
    res.json(thread);
  });
};