var mongoose = require('mongoose');

module.exports = mongoose.model('Challenge', {
  name: String,
  description: String
});