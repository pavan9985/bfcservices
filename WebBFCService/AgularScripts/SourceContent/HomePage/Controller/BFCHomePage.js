'use strict';

var BFCServicesProviding = {

    BfcCarTravelsandPurchases: 1,
    BfcACWashingMachineRefrigerators: 2,
    BfcDigitalPhotoGraphy: 3,
    BfcWoodWorks: 4,
    BfcPaintingWorks: 5,

};

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

        CloseViewDirective(BFCServicesProviding.BfcCarTravelsandPurchases);
    };

    $scope.ACWashMachineService = function () {
        $scope.DirecctivebfcACWashMachineServicesView = false;
        $scope.DirecctivebfcACWashMachineServicesNav = true;

        CloseViewDirective(BFCServicesProviding.BfcACWashingMachineRefrigerators);
    };

    $scope.DigitalPhotoGraphService = function () {
        $scope.DirecctivebfcDigitalPhotoGraphServicesView = false;
        $scope.DirecctivebfcDigitalPhotoGraphServicesNav = true;

        CloseViewDirective(BFCServicesProviding.BfcDigitalPhotoGraphy);
    };

    $scope.WoodWorksService = function () {
        $scope.DirecctivebfcWoodWorksServicesView = false;
        $scope.DirecctivebfcWoodWoorksServicesNav = true;

        CloseViewDirective(BFCServicesProviding.BfcWoodWorks);
    };

    $scope.PaintingWorks = function () {
        $scope.DirecctivebfcPaintingWorksServicesView = false;
        $scope.DirecctivebfcPaintingWorksServicesNav = true;

        CloseViewDirective(BFCServicesProviding.BfcPaintingWorks);
    };

    function CloseViewDirective(bfcservicesproviding) {

        switch (bfcservicesproviding) {
            case BFCServicesProviding.BfcCarTravelsandPurchases:
                $scope.DirecctivebfcCarServicesNav = false;
                $scope.DirecctivebfcACWashMachineServicesView = true;
                $scope.DirecctivebfcDigitalPhotoGraphServicesView = true;
                $scope.DirecctivebfcWoodWorksServicesView = true;
                $scope.DirecctivebfcPaintingWorksServicesView = true;
                break;
            case BFCServicesProviding.BfcACWashingMachineRefrigerators:
                $scope.DirecctivebfcACWashMachineServicesNav = false;
                $scope.DirecctivebfcPaintingWorksServicesView = true;
                $scope.DirecctivebfcWoodWorksServicesView = true;
                $scope.DirecctivebfcDigitalPhotoGraphServicesView = true;
                $scope.DirecctivebfcCarServicesView = true;
                break;
            case BFCServicesProviding.BfcDigitalPhotoGraphy:
                $scope.DirecctivebfcDigitalPhotoGraphServicesNav = false;
                $scope.DirecctivebfcPaintingWorksServicesView = true;
                $scope.DirecctivebfcWoodWorksServicesView = true;
                $scope.DirecctivebfcACWashMachineServicesView = true;
                $scope.DirecctivebfcCarServicesView = true;
                break;
            case BFCServicesProviding.BfcWoodWorks:
                $scope.DirecctivebfcWoodWoorksServicesNav = false;
                $scope.DirecctivebfcPaintingWorksServicesView = true;
                $scope.DirecctivebfcDigitalPhotoGraphServicesView = true;
                $scope.DirecctivebfcACWashMachineServicesView = true;
                $scope.DirecctivebfcCarServicesView = true;
                break;
            case BFCServicesProviding.BfcPaintingWorks:
                $scope.DirecctivebfcPaintingWorksServicesNav = false;
                $scope.DirecctivebfcWoodWorksServicesView = true;
                $scope.DirecctivebfcDigitalPhotoGraphServicesView = true;
                $scope.DirecctivebfcACWashMachineServicesView = true;
                $scope.DirecctivebfcCarServicesView = true;
                break;
            default:
                $scope.DirecctivebfcWoodWorksServicesView = true;
                $scope.DirecctivebfcDigitalPhotoGraphServicesView = true;
                $scope.DirecctivebfcACWashMachineServicesView = true;
                $scope.DirecctivebfcCarServicesView = true;
                $scope.DirecctivebfcPaintingWorksServicesView = true;

                $scope.DirecctivebfcPaintingWorksServicesNav = false;
                $scope.DirecctivebfcWoodWoorksServicesNav = false;
                $scope.DirecctivebfcDigitalPhotoGraphServicesNav = false;
                $scope.DirecctivebfcACWashMachineServicesNav = false;
                $scope.DirecctivebfcCarServicesNav = false;
        }
    };

}]);
