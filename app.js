(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Mehadi";
  $scope.sayHello = function () {
    return "Hello Angular!";
  };
});

})();