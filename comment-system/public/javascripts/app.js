
window.API = (function(){

  var fetchThread = function(threadId, cb){

  };

  var postNewPost = function(parentId, post){

  };

  return {
    fetchAllThreads : fetchAllThreads,
    fetchThread : fetchThread,
    postNewThread : postNewThread,
    postNewPost
  };
})();

window.Display = (function(){

  var thread = function(thread){

  };

  return {
    thread : thread
  };
})();

window.Controller = (function(){

  var voteClickHandler = function(){

  };

  var createPostClickHandler = function(){

  };

  var init = function(threadId, container){
    API.fetchThread(threadId, Display.thread);
  };

  return {
    init : init
  };
})();