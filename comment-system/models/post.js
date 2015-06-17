var mongoose = require('mongoose');
var materializedPlugin = require('mongoose-materialized');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  score: { type: Number, default: 0 },
  body: { type: String, default: "" },
  author: { type: String, required: true }
});

PostSchema.plugin(materializedPlugin);

module.exports = mongoose.model('Post', PostSchema);