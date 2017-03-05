(function(){
    'use strict';

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', CheckLunchList);

    CheckLunchList.$inject = ['$scope'];

    function CheckLunchList($scope){
        $scope.lunchList = "";
        $scope.result ="";
        $scope.CheckList = function(){
            var lunchListToSeprate = $scope.lunchList;
            var separatedLunchList = lunchListToSeprate.split(',');
            if(lunchListToSeprate == ""){
                $scope.result = "Please enter data first";
            }
            else if(separatedLunchList.length <= 3)
            {
                $scope.result = "Enjoy!";
            }
            else{
                $scope.result = "Too much!";
            }
        }
    }

   
})();
