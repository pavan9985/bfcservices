var BFCHomePage = angular.module("BFCHomePage", ['ngRoute'])
    .config(function ($routeProvider) {
        //   $routeProvider.caseInsensitiveMatch : true;
        $routeProvider
            .when("/CarServices", {
                templateUrl: "Views/bfcProfileViewDivs/bfcCarServicesProfileView.html",
                //controller: "homeContoller"
            })
            .when("/ACWashingMechineServices", {
                templateUrl: "Views/bfcProfileViewDivs/bfcAcWmServiceProfileView.html",
                //controller: "CoursesContoller"
            })
            .when("/DigitalPhotoGraphy", {
                templateUrl: "Views/bfcProfileViewDivs/bfcDigitalPhotographyProfileView.html",
                //controller: "studentsContoller"
            })
            .when("/WoodWorks", {
                templateUrl: "Views/bfcProfileViewDivs/bfcWoodWorksProfileView.html",
                //controller: "studentsContoller"
            })
            .when("/PaintingWorks", {
                templateUrl: "Views/bfcProfileViewDivs/bfcPaintingWoorksProfileView.html",
                //controller: "studentsContoller"
            })
    });