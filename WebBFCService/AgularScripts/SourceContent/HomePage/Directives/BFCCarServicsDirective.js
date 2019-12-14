BFCHomePage.directive('bfcCarServiceDirective', function () {
    return ({
        restrict: 'AE',
        transclude: true,
        replace: true,
        templateUrl: 'Views/bfcEachServicesProfile/bfcServicesButViewContProf.html',

        controller: "BFCViewProfileContactFeedBackCtrl",//controller to bind
        controllerAs: "vm", bindToController: true,//
        link: function (scope, elm, attrs, ctrl) {

        }
    })
}).controller("BFCViewProfileContactFeedBackCtrl", ['$scope', function ($scope) {

    $scope.CrossCancle = function () {

        $scope.DirecctivebfcPaintingWorksServicesView = true;
        $scope.DirecctivebfcWoodWorksServicesView = true;
        $scope.DirecctivebfcDigitalPhotoGraphServicesView = true;
        $scope.DirecctivebfcACWashMachineServicesView = true;
        $scope.DirecctivebfcCarServicesView = true;

        $scope.DirecctivebfcCarServicesNav = false;
        $scope.DirecctivebfcACWashMachineServicesNav = false;
        $scope.DirecctivebfcDigitalPhotoGraphServicesNav = false;
        $scope.DirecctivebfcWoodWoorksServicesNav = false;
        $scope.DirecctivebfcPaintingWorksServicesNav = false;
    }
    
}]);