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

    var OpenTableOnFeedBackone;

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

    $scope.OpenFeedBackOnTab = function (opneFeedBackTab) {
        OpenTableOnFeedBackone = opneFeedBackTab;
        $scope.FeedBackDirective = false;
        $scope.bfcMainProfileViewHideDirective = true;
        $scope.bfcHomePageViewHideBodyContent = true;
    }
}]);