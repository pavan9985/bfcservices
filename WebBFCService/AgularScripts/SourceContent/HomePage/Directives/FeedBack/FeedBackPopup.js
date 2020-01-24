BFCHomePage.directive("bfcFeedbackDirective", function () {
    return ({
        restrict: 'AE',
        transclude: true,
        replace: true,
        templateUrl: 'Views/FeedBack/FeedBackPopup.html',
        controller: "BfcFeedbackController",//controller to bind
        controllerAs: "vm", bindToController: true,//
        link: function (scope, elm, attrs, ctrl) {

        }
    })

}).controller("BfcFeedbackController", ['$scope', function ($scope) {
    $scope.Services = [
        { Service: "Car Service", Value: 1 },
        { Service: "Ac/Washing Machine/Refrigerators Service", Value: 2 },
        { Service: "Digital Photography", Value: 3 },
        { Service: "Wood Works", Value: 4 },
        { Service: "Painting Works", Value: 5 },
        { Service: "Other", Value: 6 },
    ];

    $scope.FeedBackCategory = [
        { FeedBackOn: "BFC Response Over Web Site", Value: 1 },
        { FeedBackOn: "BFC Services Person Response", Value: 2 },
        { FeedBackOn: "BFC Tech Response", Value: 3 },
        { FeedBackOn: "BFC Mouth Talk", Value: 4 },
        { FeedBackOn: "Other", Value: 5 },
    ];

    $scope.BfcHowToKnow = [
        { KnowBy: "Scocial Media", Value: 1 },
        { KnowBy: "Mouth Talk", Value: 2 },
        { KnowBy: "Friend Suggest", Value: 3 },
        { KnowBy: "Other", Value: 4 },
    ];

    var OpenTableOnFeedBackone;

    var firebaseConfig = {
        apiKey: "AIzaSyA-VMi7uWfEczBkXUBxHVanFnn2DcIqzP4",
        authDomain: "bfcservices-vdshos.firebaseapp.com",
        databaseURL: "https://bfcservices-vdshos.firebaseio.com",
        projectId: "bfcservices-vdshos",
        storageBucket: "bfcservices-vdshos.appspot.com",
        messagingSenderId: "334572477511",
        appId: "1:334572477511:web:0823b352ae3b9fe9d6e562",
        measurementId: "G-3K6E1RV5N3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var database = firebase.database();

    $scope.CrossCancleFeedBack = function () {
        if (OpenTableOnFeedBackone == 1) {
            $scope.bfcHomePageViewHideBodyContent = false;
            $scope.FeedBackDirective = true;
        }
        else if (OpenTableOnFeedBackone == 2) {
            $scope.bfcMainProfileViewHideDirective = false;
            $scope.FeedBackDirective = true;
        }
    };

    $scope.CurrentFeedbackstartFunction = function () {
        var CurrentStarIdValue;
        for (var StartIndex = 1; StartIndex <= 5; StartIndex++) {
            CurrentStarIdValue = "FeedBackstar" + StartIndex.toString();
            if (StartIndex <= $scope.StarclickNumber) {

                document.getElementById(CurrentStarIdValue).style.color = "gold";
            }
            else {
                document.getElementById(CurrentStarIdValue).style.color = "#7b7f86";
            }
        }
    };


    $scope.OpenFeedBackOnTab = function (opneFeedBackTab) {
        OpenTableOnFeedBackone = opneFeedBackTab;
        $scope.FeedBackDirective = false;
        $scope.bfcMainProfileViewHideDirective = true;
        $scope.bfcHomePageViewHideBodyContent = true;
    }

    $scope.FeedBackReset = function () {
        $scope.SelectedServicesOnFeedBack = undefined;
        $scope.SelectedFeedBackCategory = undefined;
        $scope.SelectedHowBfcKnow = undefined;
        $scope.FeedBackerName = "";
        $scope.FeedBackerPhoneNumber = "";
        $scope.FeedBackDescription = "";
        $scope.StarclickNumber = 0;
        $scope.CurrentFeedbackstartFunction();
    }

    $scope.FeedBackSubmit = function () {
        if (!hasValue($scope.SelectedServicesOnFeedBack)) {
            alert("Select Service to Give Feed Back.");
            return;
        }
        if (!hasValue($scope.SelectedFeedBackCategory)) {
            alert("Select Feed Back Category.");
            return;
        }
        if (!hasValue($scope.SelectedHowBfcKnow)) {
            alert("Select How you got to Know About BFC.");
            return;
        }
        if (!hasValue($scope.FeedBackerName)) {
            alert("Enter your Name.");
            return;
        }
        if (!hasValue($scope.FeedBackerPhoneNumber)) {
            alert("Enter your Mobile Number.");
            return;
        }
        if (!hasValue($scope.FeedBackDescription)) {
            alert("Describe the Feed Back.");
            return;
        }
        if (!hasValue($scope.StarclickNumber)) {
            alert("Rate the BFC.");
            return;
        }

        $scope.StoreFeedBackToFireBaseDb();
    };

    $scope.StoreFeedBackToFireBaseDb = function () {
        var dateValue = new Date();
        var Guid = dateValue.valueOf();
        firebase.database().ref($scope.FeedBackerPhoneNumber + "_" + $scope.FeedBackerName + "_" + Guid).set({
            FeedBackOnService: $scope.SelectedServicesOnFeedBack,
            FeedBackCategory: $scope.SelectedFeedBackCategory,
            BfcToKnow: $scope.SelectedHowBfcKnow,
            FeedBackerName: $scope.FeedBackerName,
            MonileNumber: $scope.FeedBackerPhoneNumber,
            FeedBackDescription: $scope.FeedBackDescription,
            Location: $scope.LoginUserDetails.latitude + "_" + $scope.LoginUserDetails.longitude,
            ipAddress: $scope.LoginUserDetails.ip,
            city: $scope.LoginUserDetails.city,
            state: $scope.LoginUserDetails.region,
            time: new Date().toLocaleTimeString(),
            Date: new Date().toLocaleDateString(),
            Rating: $scope.StarclickNumber,
        });
        $scope.FeedBackReset();
        $scope.CrossCancleFeedBack();
        alert("Thanks, This FeedBack Helps Other.");
    }
}]);