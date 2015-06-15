var tree = require('mongoose-path-tree');
var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  threadParent : { type: Boolean, default: false },
  body : { type: String, default: "" },
  score : { type: Number, default: 0 }
});

PostSchema.plugin(tree);

module.exports = mongoose.model('Post', PostSchema);