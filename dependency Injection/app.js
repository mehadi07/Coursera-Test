(function () {
    'use strict';

    angular.module('DiApp', [])

    .controller('DiController', DiController);

    function DiController($scope, $filter, $injector) {
        $scope.name = "Mehadi";

        $scope.upper = function () {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
        console.log($injector.annotate(DiController));
    }

    function AnnoateMe(name, job, blah) {
        return "Blah";
    }
    console.log(DiController.toString());

})();