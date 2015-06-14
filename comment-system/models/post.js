var tree = require('mongoose-tree');
var Schema = require('mongoose').Schema;

var PostSchema = new Schema({
  body : { type: String, default: "" },
  score : { type: Number, default: 0 }
});

PostSchema.plugin(tree);

module.exports = mongoose.model('Post', PostSchema);