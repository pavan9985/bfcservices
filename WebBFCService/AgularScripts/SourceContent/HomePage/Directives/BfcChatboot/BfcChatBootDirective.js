BFCHomePage.directive("bfcChatBootDirective", function () {
    return ({
        restrict: 'AE',
        transclude: true,
        replace: true,
        templateUrl: 'Views/BfcChatBoot/BFCChatBootPopUp.html',
        controller: "BfcChatBootController",//controller to bind
        controllerAs: "vm", bindToController: true,//
        link: function (scope, elm, attrs, ctrl) {

        }
    })

}).controller("BfcChatBootController", ['$scope', function ($scope) {
    $scope.CrossCancleChatBoot = function () {
        $scope.BfcChatbootShowHide = true;
        $scope.BfcChatbootHomePageIcon = false;
    };
}]);