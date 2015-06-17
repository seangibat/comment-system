var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String, required: true },
  votes: { type: Schema.Types.Mixed, default: {} }
});

module.exports = mongoose.model('User', UserSchema);