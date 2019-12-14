BFCHomePage.directive('bfcCarServiceDirective', function () {
    return ({
        restrict: 'AE',
        transclude: true,
        replace: true,
        templateUrl: "Views/bfcEachServicesProfile/bfcCarServicesButViewContProf.html",
        cssUrl: "Styles/CSS/BFCViewProfileContactFeeBack.css",
        controller: "",//controller to bind
        controllerAs: "vm", bindToController: true,//
    })
});