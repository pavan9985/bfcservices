﻿BFCHomePage.directive('bfcAcWashingmechineRefrigeratorsDirective', function () {
    return ({
        restrict: 'AE',
        transclude: true,
        replace: true,
        templateUrl: 'Views/bfcEachServicesProfile/bfcAcWashingmechineRefrigeratorsServicesButViewContProf.html',
        controller: "BFCAcWmRfgViewProfileContactFeedBackCtrl",//controller to bind
        controllerAs: "vm", bindToController: true,//
        link: function (scope, elm, attrs, ctrl) {

        }
    })
}).controller("BFCAcWmRfgViewProfileContactFeedBackCtrl", ['$scope', function ($scope) {

    $scope.bfcAcWmRfgViewContact = function () {

        alert("tel Num");
    };

}]);