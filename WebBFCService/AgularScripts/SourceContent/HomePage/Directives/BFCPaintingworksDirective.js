BFCHomePage.directive('bfcPaintingWorksServiceDirective', function () {
    return ({
        restrict: 'AE',
        transclude: true,
        replace: true,
        templateUrl: 'Views/bfcEachServicesProfile/bfcPaintingworksServicesButViewContProf.html',
        controller: "BFCPaintingWorksViewProfileContactFeedBackCtrl",//controller to bind
        controllerAs: "vm", bindToController: true,//
        link: function (scope, elm, attrs, ctrl) {

        }
    })
}).controller("BFCPaintingWorksViewProfileContactFeedBackCtrl", ['$scope', function ($scope) {



}]);