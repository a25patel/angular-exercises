var app = angular.module('myApp', []);

app.controller('mainController', function($scope){
  $scope.name = 'Harry Potter';
  $scope.favColor = 'Orange';
  $scope.secondsInACentury = 100 * 365 * 24 * 60 * 60;
  $scope.rightNow = new Date();
})
