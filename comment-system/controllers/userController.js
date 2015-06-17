module.exports.getUserVotes = function(req, res, next){
  console.log("votes controller");
  res.json(req.session.user.votes);
};