commentSystem.factory('API', ['$resource', function ($resource) {
  var thread = $resource('/api/thread');
  var postVote = $resource('/api/vote', {id:'@id'}, {update: {method: 'PATCH'}});
  var post = $resource('/api/post');
  var userVotes = $resource('/user/votes');

  return {
    userVotes: userVotes,
    postVote: postVote,
    thread: thread,
    post: post
  };
}]);