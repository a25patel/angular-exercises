var app = angular.module('myApp', []);

app.controller('mainController', function($scope){
  $scope.pickRandomNumber = function(){
    $scope.number = Math.floor(Math.random()*10) + 1
  }
  $scope.reverse = function(word){
    $scope.word = word.split('').reverse().join('')
  }
})

app.controller('pingPong', function($scope){
  $scope.score1 = 0;
  $scope.score2 = 0;
  $scope.reset = function(){
    $scope.score1 = 0;
    $scope.score2 = 0;
  }
  $scope.addPoint1 = function(score){
    $scope.score1 = score + 1
  }
  $scope.addPoint2 = function(score){
    $scope.score2 = score + 1
  }
})





// })
//
// app.controller('contacts', function ($scope) {
//   $scope.contacts = [{name: 'Bob', email: 'bob@bob.com', phone: '303-111-2222'}];
//   $scope.addContact = function (name, email, phone) {
//     $scope.contacts.push({name: name, email: email, phone: phone})
//     $scope.name = '';
//     $scope.email = '';
//     $scope.phone = '';
//   };
//   $scope.show = function (){
//     $scope.name = 'Howdy'
//   };
// })
