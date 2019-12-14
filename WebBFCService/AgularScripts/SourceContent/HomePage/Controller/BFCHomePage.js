'use strict';



function hasValue(inputValue) {
    if (inputValue != undefined && inputValue != null && inputValue.toString().length > 0) {

        return true;
    }
    else {
        return false;
    }
}



BFCHomePage.controller("BFCHomeCtrl", ['$scope', function ($scope) {


    $scope.CarServices = function () {

        $scope.DirecctivebfcCarServicesView = false;
        $scope.DirecctivebfcCarServicesNav = true;
    };

    $scope.ACWashMachineService = function () {
        $scope.DirecctivebfcACWashMachineServicesView = false;
        $scope.DirecctivebfcACWashMachineServicesNav = true;

    };

    $scope.DigitalPhotoGraphService = function () {
        $scope.DirecctivebfcDigitalPhotoGraphServicesView = false;
        $scope.DirecctivebfcDigitalPhotoGraphServicesNav = true;

    };

    $scope.WoodWorksService = function () {
        $scope.DirecctivebfcWoodWorksServicesView = false;
        $scope.DirecctivebfcWoodWoorksServicesNav = true;

    };

    $scope.PaintingWorks = function () {
        $scope.DirecctivebfcPaintingWorksServicesView = false;
        $scope.DirecctivebfcPaintingWorksServicesNav = true;

    };


}]);
