﻿'use strict';

//var BFCServicesProviding = {

//    BfcCarTravelsandPurchases: 1,
//    BfcACWashingMachineRefrigerators: 2,
//    BfcDigitalPhotoGraphy: 3,
//    BfcWoodWorks: 4,
//    BfcPaintingWorks: 5,

//};


var BFCServicesProviding = {

    BfcCarTravelsandPurchases: "BfcCarTravelsandPurchases",
    BfcACWashingMachineRefrigerators: "BfcACWashingMachineRefrigerators",
    BfcDigitalPhotoGraphy: "BfcDigitalPhotoGraphy",
    BfcWoodWorks: "BfcWoodWorks",
    BfcPaintingWorks: "BfcPaintingWorks",

};

function hasValue(inputValue) {
    if (inputValue != undefined && inputValue != null && inputValue.toString().length > 0) {

        return true;
    }
    else {
        return false;
    }
}

BFCHomePage.controller("BFCHomeCtrl", ['$scope', '$http', function ($scope, $http) {
    $scope.bfcHomePageViewHideBodyContent = false;

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
                //$scope.DirecctivebfcCarServicesNav = true;
                $scope.DirecctivebfcACWashMachineServicesView = true;
                $scope.DirecctivebfcDigitalPhotoGraphServicesView = true;
                $scope.DirecctivebfcWoodWorksServicesView = true;
                $scope.DirecctivebfcPaintingWorksServicesView = true;

                $scope.DirecctivebfcACWashMachineServicesNav = false;
                $scope.DirecctivebfcDigitalPhotoGraphServicesNav = false;
                $scope.DirecctivebfcWoodWoorksServicesNav = false;
                $scope.DirecctivebfcPaintingWorksServicesNav = false;
                break;
            case BFCServicesProviding.BfcACWashingMachineRefrigerators:
                //$scope.DirecctivebfcACWashMachineServicesNav = false;
                $scope.DirecctivebfcPaintingWorksServicesView = true;
                $scope.DirecctivebfcWoodWorksServicesView = true;
                $scope.DirecctivebfcDigitalPhotoGraphServicesView = true;
                $scope.DirecctivebfcCarServicesView = true;

                $scope.DirecctivebfcDigitalPhotoGraphServicesNav = false;
                $scope.DirecctivebfcWoodWoorksServicesNav = false;
                $scope.DirecctivebfcPaintingWorksServicesNav = false;
                $scope.DirecctivebfcCarServicesNav = false;
                break;
            case BFCServicesProviding.BfcDigitalPhotoGraphy:
                //$scope.DirecctivebfcDigitalPhotoGraphServicesNav = false;
                $scope.DirecctivebfcPaintingWorksServicesView = true;
                $scope.DirecctivebfcWoodWorksServicesView = true;
                $scope.DirecctivebfcACWashMachineServicesView = true;
                $scope.DirecctivebfcCarServicesView = true;

                $scope.DirecctivebfcACWashMachineServicesNav = false;
                $scope.DirecctivebfcWoodWoorksServicesNav = false;
                $scope.DirecctivebfcPaintingWorksServicesNav = false;
                $scope.DirecctivebfcCarServicesNav = false;
                break;
            case BFCServicesProviding.BfcWoodWorks:
                //$scope.DirecctivebfcWoodWoorksServicesNav = false;
                $scope.DirecctivebfcPaintingWorksServicesView = true;
                $scope.DirecctivebfcDigitalPhotoGraphServicesView = true;
                $scope.DirecctivebfcACWashMachineServicesView = true;
                $scope.DirecctivebfcCarServicesView = true;

                $scope.DirecctivebfcDigitalPhotoGraphServicesNav = false;
                $scope.DirecctivebfcACWashMachineServicesNav = false;
                $scope.DirecctivebfcPaintingWorksServicesNav = false;
                $scope.DirecctivebfcCarServicesNav = false;
                break;
            case BFCServicesProviding.BfcPaintingWorks:
                //$scope.DirecctivebfcPaintingWorksServicesNav = false;
                $scope.DirecctivebfcWoodWorksServicesView = true;
                $scope.DirecctivebfcDigitalPhotoGraphServicesView = true;
                $scope.DirecctivebfcACWashMachineServicesView = true;
                $scope.DirecctivebfcCarServicesView = true;

                $scope.DirecctivebfcWoodWoorksServicesNav = false;
                $scope.DirecctivebfcDigitalPhotoGraphServicesNav = false;
                $scope.DirecctivebfcACWashMachineServicesNav = false;
                $scope.DirecctivebfcCarServicesNav = false;
                break;

        }
    };

    $scope.CrossCancleProfileView = function () {
        $scope.bfcMainProfileViewHideDirective = true;
        $scope.bfcHomePageViewHideBodyContent = false;
    };

    $scope.CurrentstartFunction = function (Servicesnumber) {
        var CurrentStarIdValue;
        for (var StartIndex = 1; StartIndex <= 5; StartIndex++) {
            CurrentStarIdValue = CurrentServicesName(Servicesnumber) + "star" + StartIndex.toString();
            if (StartIndex <= $scope.StarclickNumber) {

                document.getElementById(CurrentStarIdValue).style.color = "gold";
            }
            else {
                document.getElementById(CurrentStarIdValue).style.color = "#7b7f86";
            }
        }
    };


    function CurrentServicesName(Servicenumber) {

        var BFCCurentServicesName;
        try {

            switch (Servicenumber) {

                case 1:
                    return BFCCurentServicesName = BFCServicesProviding.BfcCarTravelsandPurchases.toString();
                    break;
                case 2:
                    return BFCCurentServicesName = BFCServicesProviding.BfcACWashingMachineRefrigerators.toString();
                    break;
                case 3:
                    return BFCCurentServicesName = BFCServicesProviding.BfcDigitalPhotoGraphy.toString();
                    break;
                case 4:
                    return BFCCurentServicesName = BFCServicesProviding.BfcWoodWorks.toString();
                    break;
                case 5:
                    return BFCCurentServicesName = BFCServicesProviding.BfcPaintingWorks.toString();
                    break;
                default:
                    break;
            }

        } catch (e) {

        }


    }


    $scope.restCall = function (url, data) {
        var postData;
        if (hasValue(data)) {
            postData = JSON.stringify(data);
        }
        else {
            return;
        }
        $http.post(url, JSON.stringify(data)).then(function (response) {
            if (response.data) {

            }
        });
    };

    
}]);
