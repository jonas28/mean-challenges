var Challenge = require('../models/challenge');

module.exports.create = function (req, res) {
  var challenge = new Challenge(req.body);
  challenge.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Challenge.find({}, function (err, results) {
    res.json(results);
  });
}