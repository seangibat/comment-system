commentSystem.controller("ThreadController", ['$scope', 'API', function($scope, API) {


  $scope.createPost = function(post, reply){
    var newPost = new API.post();
    newPost.parentId = post._id;
    newPost.postBody = post.reply;
    post.reply = "";
    post.replyTrigger = false;
    newPost.$save(function(newPost){
      console.log(newPost);
      post.children = post.children || []
      post.children.push(newPost);
    });
  };

  $scope.vote = function(post, change){
    var vote = new API.postVote();
    vote.scoreChange = change;
    vote.postId = post._id;

    vote.$save(function(d){
      var oldVote = $scope.votes[post._id];
      $scope.votes[post._id] = (oldVote ? oldVote : 0) + parseInt(change);
      if (d.valid) post.score += parseInt(change);
    });
  };

  API.userVotes.get(function(votes){
    API.thread.get(function(thread){
      $scope.thread = thread;
      $scope.votes = votes;
    });
  });

}]);