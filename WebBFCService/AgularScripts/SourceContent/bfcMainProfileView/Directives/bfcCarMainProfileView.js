BFCHomePage.directive('bfcCarMainProfileView', function () {
    return ({
        restrict: 'AE',
        transclude: true,
        replace: true,
        templateUrl: 'Views/bfcProfileViewDivs/bfcCarServicesProfileView.html',
        controller: "BFCCarMainProfileViewCtrl",//controller to bind
        controllerAs: "vm", bindToController: true,//
        link: function (scope, elm, attrs, ctrl) {

        }
    })
}).controller("BFCCarMainProfileViewCtrl", ['$scope', function ($scope) {



}]);