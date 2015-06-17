var Post = require('../models/post');
var User = require('../models/user');

module.exports.vote = function(req, res, next){
  Post.findById(req.body.postId, function(err, post){
    if (err) return next(err);

    var postId = req.body.postId;
    var scoreChange = parseInt(req.body.scoreChange);
    var currentPostScoreForUser = req.session.user.votes ? (req.session.user.votes[postId] || 0) : 0;
    var newPostScoreForUser = currentPostScoreForUser + scoreChange;
    var legalVote = !(Math.abs(newPostScoreForUser) > 1);

    if (legalVote){
      post.score += scoreChange;
      post.save(function(err, post){
        if (err) return next(err);

        User.findById(req.session.user._id, function(err, user){
          req.session.user.votes = req.session.user.votes || {};
          req.session.user.votes[postId] = newPostScoreForUser;
          user.votes = req.session.user.votes;
          user.save(function(){
            res.json({ valid: true });
          });
        });

      });
    } else {
      res.json({ valid: false });
    }

  });
};