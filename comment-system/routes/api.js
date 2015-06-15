var express = require('express');
var router = express.Router();
var threadController = require('../controllers/threadController.js');
var postController = require('../controllers/postController.js');

/* GET home page. */
router
  .get('/threads', threadController.getThreads)
  .get('/thread/:threadId', threadController.getThread)
  .post('/thread', threadController.createThread)
  .get('/post/:postId', postController.getPost)
  .post('/post', postController.createPost);

module.exports = router;
