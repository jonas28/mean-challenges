app.controller('challengesController', ['$scope', '$resource', function ($scope, $resource) {
  var Challenge = $resource('/api/challenges');

  Challenge.query(function (results) {
    $scope.challenges = results;
  });

  $scope.challenges = []


  $scope.createChallenge = function () {
    var challenge = new Challenge();
    challenge.name = $scope.challengeName;
    challenge.$save(function (result) {
      $scope.challenges.push(result);
      $scope.challengeName = '';
    });
  };

  $scope.updateChallenge = function (id) { 
    challenge = id;
    challenge.description = $scope.challengeDescription;
    challenge.$save(function (result) {
      $scope.updateChallenge.push(result);
    });
  };


  

  $scope.setChallenge = function(challenge){
    $scope.challenge = challenge;
  }

}]);