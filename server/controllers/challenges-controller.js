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

module.exports.show = function (req, res) {
  Challenge.findById(req.params.id, function (err, results) {
    res.json(results);
  });
}



module.exports.update = function (req, res) {  
  return Challenge.findById(req.params.id, function (err, challenge) {
    challenge.name = req.body.name;
    challenge.description = req.body.description;
    challenge.save(function (err, result) {
      res.json(result);
    });
  });
}