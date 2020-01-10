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

    var GooleDilogFlowBaseURL = "https://dilogflow.googleapis.com/v2/";
    var GoolgeDiglogFlowClientToken = "d318896f9ebc46fc898922b7278d6dca";


    $scope.CrossCancleChatBoot = function () {
        $scope.BfcChatbootShowHide = true;
        $scope.BfcChatbootHomePageIcon = false;
    };

    function addSendClassDiv(ChatMessagetoSend) {
        var ParentDiv = angular.element(document.querySelector('#ParrentDivofChatbootmessages'));
        ParentDiv.append('<div class="ChatbootSenderMessage">< div><img src="Rescorces/images/WhatsAppImage2019-11-22at02.29.04.jpeg" class="ChatbootSenderMessageIcon" /></div ><p class="ChatbootSenderMessageText">' + ChatMessagetoSend + '</p></div >')

    };


    $scope.ChatbootMessageSendBut = function () {
        var ChatMessagetoSend;
        if (!hasValue($scope.ChatBootMessagetoSendText)) {
            alert("Enter a Message to Send !...");
            return;
        }

        ChatMessagetoSend = $scope.ChatBootMessagetoSendText;

        addSendClassDiv(ChatMessagetoSend);

        $scope.ChatBootMessagetoSendText = '';
        GoogleDilogFlowService(ChatMessagetoSend);
    };

    function init() {

    }

    //gapi.load('client', start);
    function GoogleDilogFlowService(ChatMessagetoSend) {

        if (!hasValue(ChatMessagetoSend)) {
            return;
        }
        gapi.load('client', function () {
            gapi.client.init({
                'apiKey': 'AIzaSyB1t_tpo-If37RlO8k0D83LggZq2Z7nEuw',
                // clientId and scope are optional if auth is not required.
                'clientId': '334572477511-nd15dr112ttp11aidphh8f3uh47cen01.apps.googleusercontent.com',
                'scope': 'profile',
            }).then(function () {
                // 3. Initialize and make the API request.
                return gapi.client.request({
                    'path': 'https://dialogflow.googleapis.com/v2/projects/bfcservices-vdshos/agent/sessions/5841487587555426:detectIntent',
                    'method': 'POST',
                    'body': "{ 'query_input': { 'text': { 'text': 'hii', 'language_code': 'en- US' } } }",
                })
            }).then(function (response) {
                console.log(response.result);
            }
                //function (reason) {
                //console.log('Error: ' + reason.result.error.message);
                //}
            );

            //$.ajax({
            //    type: "POST",
            //    url: "https://dialogflow.googleapis.com/v2/projects/bfcservices-vdshos/agent/sessions/5225487587555426:detectIntent",
            //    contentType: "application/json; charset-utf-8",
            //    dataType: "json",
            //    headers: {
            //        "Authorization": "Bearer "+GoolgeDiglogFlowClientToken
            //    },
            //    data: JSON.stringify({ query_input: { text: { text: ChatMessagetoSend, language_code: 'en-US' } } }),
            //    success: function (data) {
            //        addReceiverClassDiv(data);
            //    }
            //});
        });
    };

    function addReceiverClassDiv(DiglogFlowResponseData) {
        if (!hasValue(DiglogFlowResponseData)) {
            alert("Smart Dialog Flow Faile to Get Rsponse");
            return;
        }

        var ParentDiv = angular.element(document.querySelector('#ParrentDivofChatbootmessages'));
        ParentDiv.append('<div class="ChatbootReceiverMessage"><div><img src="Rescorces/images/WhatsAppImage2019-11-22at02.29.04.jpeg" class="ChatbootReceiverMessageIcon" /></div><p class="ChatbootReceiverMessageText">' + DiglogFlowResponseData.result.fulfillment.speech + '</p></div>');
    }

}]);