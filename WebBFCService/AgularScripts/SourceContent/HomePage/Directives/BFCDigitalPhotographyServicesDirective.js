BFCHomePage.directive('bfcDigitalPhotographyServiceDirective', function () {
    return ({
        restrict: 'AE',
        transclude: true,
        replace: true,
        templateUrl: 'Views/bfcEachServicesProfile/bfcDigitalPhotographyServicesButViewContProf.html',
        controller: "BFCDigitalPhotographyViewProfileContactFeedBackCtrl",//controller to bind
        controllerAs: "vm", bindToController: true,//
        link: function (scope, elm, attrs, ctrl) {

        }
    })
}).controller("BFCDigitalPhotographyViewProfileContactFeedBackCtrl", ['$scope', function ($scope) {


    
}]);