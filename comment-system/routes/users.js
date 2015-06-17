var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.get('/votes', userController.getUserVotes);

module.exports = router;
