var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    challengesController = require('./server/controllers/challenges-controller');

mongoose.connect('mongodb://localhost:27017/challenges');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));

//REST API
app.get('/api/challenges', challengesController.list);
app.post('/api/challenges', challengesController.create);

app.listen(3000, function() {
  console.log('I\'m Listening...');
})