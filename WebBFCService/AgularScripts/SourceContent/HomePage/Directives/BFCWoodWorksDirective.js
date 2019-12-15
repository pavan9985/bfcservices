BFCHomePage.directive('bfcWoodworksServiceDirective', function () {
    return ({
        restrict: 'AE',
        transclude: true,
        replace: true,
        templateUrl: 'Views/bfcEachServicesProfile/bfcWoodWorksServicesButViewContProf.html',
        controller: "BFCWoodworksViewProfileContactFeedBackCtrl",//controller to bind
        controllerAs: "vm", bindToController: true,//
        link: function (scope, elm, attrs, ctrl) {

        }
    })
}).controller("BFCWoodworksViewProfileContactFeedBackCtrl", ['$scope', function ($scope) {

    $scope.bfcWoodworksViewProfile = function () {


    }

}]);