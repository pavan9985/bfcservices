BFCHomePage.directive('bfcCarServiceDirective', function () {
    return ({
        restrict: 'AE',
        transclude: true,
        replace: true,
        templateUrl: 'Views/bfcEachServicesProfile/bfcCarServicesButViewContProf.html',
        
        controller: "",//controller to bind
        controllerAs: "vm", bindToController: true,//
        link: function (scope, elm, attrs, ctrl) {

        }
    })
});