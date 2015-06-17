var express = require('express');
var router = express.Router();
var threadController = require('../controllers/threadController.js');
var postController = require('../controllers/postController.js');
var voteController = require('../controllers/voteController.js');

/* GET home page. */
router
  .get('/thread/:threadId', threadController.getThread)
  .get('/thread', threadController.getFirstThread)
  .post('/thread', threadController.createThread)
  .post('/vote', voteController.vote)
  .post('/post', postController.createPost);

module.exports = router;
