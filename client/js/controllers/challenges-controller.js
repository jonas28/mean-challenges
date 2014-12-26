app.controller('challengesController', ['$scope', '$resource', function ($scope, $resource) {
  var Challenge = $resource('/api/challenges');

  Challenge.query(function (results) {
    $scope.challenges = results;
  });

  $scope.challenges = []

  $scope.createChallenge = function () {
    var challenge = new Challenge();
    challenge.name = $scope.challengeName;
    challenge.description = $scope.challengeDescription;
    challenge.$save(function (result) {
      $scope.challenges.push(result);
      $scope.challengeName = '';
      $scope.challengeDescription = '';
    });
  }
}]);