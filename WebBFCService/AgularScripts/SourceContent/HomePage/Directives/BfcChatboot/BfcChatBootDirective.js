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
    var clientId = "334572477511-h0mfjbn0a1behm2ja63dcls65jn91k11.apps.googleusercontent.com";
    var clientSecret = "vAMNij5ZWH7gZAEvX9TprxbC";
    var tokenKey = "ya29.Il-6B-3CPrP98riYEi93ha8ptVsXPEo2RwCoLP9i-i_GPJ6j7MA2xPU7wsyH6qCgPiZofnodNfbusRQvIJRC6VGWGZSTC8DUXQruBH7Ho0uplDXs_NNF3oWCZaBTQfOQw";
    var RefreshToken = "1//0gV_SwwZ0Rs1vCgYIARAAGBASNwF-L9IrN31wEty5KFzh2jagusiO7WmnHjkL-xlKugKUwRaKkjZ2zvNiNnrXUca7HA1cN2_KPwI";
    var refreshAccessTokenUrl = "https://accounts.google.com/o/oauth2/token";
    var dilogFlowGetIndentUrl = "https://dialogflow.googleapis.com/v2beta1/projects/bfcservices-vdshos/agent/sessions/756ce29c-80ba-069d-a0d1-72d53396545:detectIntent";
    //var GoolgeDiglogFlowClientToken = "334572477511-nd15dr112ttp11aidphh8f3uh47cen01.apps.googleusercontent.com";


    $scope.CrossCancleChatBoot = function () {
        $scope.BfcChatbootShowHide = true;
        $scope.BfcChatbootHomePageIcon = false;
    };

    function addSendClassDiv(ChatMessagetoSend) {
        var ParentDiv = angular.element(document.querySelector('#ParrentDivofChatbootmessages'));
        $scope.hideTheOpenChatMessage = true;

        ParentDiv.append(
            '<div class="ChatbootSenderMessage"><div><img src="Rescorces/images/WhatsAppImage2019-11-22at02.29.04.jpeg" class="ChatbootSenderMessageIcon" /></div ><p class="ChatbootSenderMessageText">' +
            ChatMessagetoSend +
            '</p></div >');
        //document.getElementById('ParrentDivofChatbootmessages').scrollTop =
            //document.getElementById('ParrentDivofChatbootmessages').scrollHeight;
        //ParentDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
        //ParentDiv.scrollTop = ParentDiv.scrollHeight;
        ParentDiv.animate({
            scrollTop: document.getElementById('ParrentDivofChatbootmessages').scrollHeight - document.getElementById('ParrentDivofChatbootmessages').clientHeight
        }, 200);
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
        GoogleDilogFlowService({ query_input: { text: { text: ChatMessagetoSend, language_code: "en-US" } }, queryParams: { timeZone: "Asia/Calcutta" } }, dilogFlowGetIndentUrl, "application/json; charset-utf-8", "json", { 'Authorization': "Bearer " + tokenKey });
    };

    //gapi.load('client', start);
    function GoogleDilogFlowService(data, url, ContentType, dataType, hedders) {
        var PostData;

        if (dataType == "json") {
            PostData = JSON.stringify(data);
        }
        else if (dataType == "Text") {
            PostData = data;
        }

        $.ajax({
            type: "POST",
            url: url,
            contentType: ContentType,
            dataType: dataType,
            headers: hedders,
            data: PostData,
            success: function (data) {
                if (hasValue(data.access_token)) {
                    tokenKey = data.access_token;
                }
                addReceiverClassDiv(data);
            },
            error: function (erroeResponse) {
                console.log(erroeResponse.status);
                if (erroeResponse.status === 401) {
                    getRefrestToken();
                }
            },
            dataType: "json",
            contentType: "application/json"
        });


        //$.ajax({
        //    type: "POST",
        //    url: "https://dialogflow.googleapis.com/v2beta1/projects/bfcservices-vdshos/agent/sessions/756ce29c-80ba-069d-a0d1-72d53396b825:detectIntent",
        //    contentType: "application/json; charset-utf-8",
        //    dataType: "json",
        //    headers: {
        //        'Authorization': "Bearer ya29.c.Kl65B1P2Jm_0d0qdrk4ARQLQsxTmcz_b1xicwPEPTpWZByJHipS2AXUJHm6MSI-Dx0BG-5AyMWTY7YB6-i58XiOai-6VH8WnKgl-mKQKP1aoe0yUHTA6JeUH6plkXl-r"
        //    },
        //    data: JSON.stringify({
        //        "query_input": { "text": { "text": ChatMessagetoSend, "language_code": "en-US" } }, "queryParams": { "timeZone": "Asia/Calcutta" }
        //    }),
        //    success: function (data) {
        //        addReceiverClassDiv(data);
        //    },
        //    error: function (erroeResponse) {
        //        console.log(erroeResponse.status);
        //        if (erroeResponse.status === 401) {
        //            getRefrestToken();
        //        }
        //    },
        //    dataType: "json",
        //    contentType: "application/json"
        //});


        //$.ajax({
        //    type: "POST",
        //    url: "https://dialogflow.googleapis.com/v2/projects/bfcservices-vdshos/agent/sessions/5454877841647555426:detectIntent",
        //    contentType: "application/json; charset-utf-8",
        //    dataType: "json",
        //    headers: {
        //        'Authorization': "Bearer " + GoolgeDiglogFlowClientToken
        //    },
        //    data: JSON.stringify({ "query_input": { "text": { "text": ChatMessagetoSend, "language_code": "en-US" } } }),
        //    success: function (data) {
        //        addReceiverClassDiv(data);
        //    }
        //});



        //gapi.load('client', function () {
        //    gapi.client.init({
        //        'apiKey': 'AIzaSyB1t_tpo-If37RlO8k0D83LggZq2Z7nEuw',
        //        // clientId and scope are optional if auth is not required.
        //        'clientId': '334572477511-nd15dr112ttp11aidphh8f3uh47cen01.apps.googleusercontent.com',
        //        'scope': 'profile',
        //    }).then(function () {
        //        // 3. Initialize and make the API request.
        //        return gapi.client.request({
        //            'path': 'https://dialogflow.googleapis.com/v2/projects/bfcservices-vdshos/agent/sessions/5841487587555426:detectIntent',
        //            'method': 'POST',
        //            'headers': "{'Authorization': 'Bearer d318896f9ebc46fc898922b7278d6dca'}",
        //            'body': "{ 'query_input': { 'text': { 'text': 'hii', 'language_code': 'en- US' } } }",
        //        })
        //    }).then(function (response) {
        //        console.log(response.result);
        //    }
        //        //function (reason) {
        //        //console.log('Error: ' + reason.result.error.message);
        //        //}
        //    );

        //    //$.ajax({
        //    //    type: "POST",
        //    //    url: "https://dialogflow.googleapis.com/v2/projects/bfcservices-vdshos/agent/sessions/5225487587555426:detectIntent",
        //    //    contentType: "application/json; charset-utf-8",
        //    //    dataType: "json",
        //    //    headers: {
        //    //        "Authorization": "Bearer "+GoolgeDiglogFlowClientToken
        //    //    },
        //    //    data: JSON.stringify({ query_input: { text: { text: ChatMessagetoSend, language_code: 'en-US' } } }),
        //    //    success: function (data) {
        //    //        addReceiverClassDiv(data);
        //    //    }
        //    //});
        //});
    };

    function addReceiverClassDiv(DiglogFlowResponseData) {
        if (!hasValue(DiglogFlowResponseData)) {
            alert("Smart Dialog Flow Faile to Get Rsponse");
            return;
        }

        var ParentDiv = angular.element(document.querySelector('#ParrentDivofChatbootmessages'));
        ParentDiv.append('<div class="ChatbootReceiverMessage"><div><img src="Rescorces/images/WhatsAppImage2019-11-22at02.29.04.jpeg" class="ChatbootReceiverMessageIcon" /></div><p class="ChatbootReceiverMessageText">' + DiglogFlowResponseData.queryResult.fulfillmentText + '</p></div>');
        ParentDiv.animate({
            scrollTop: document.getElementById('ParrentDivofChatbootmessages').scrollHeight - document.getElementById('ParrentDivofChatbootmessages').clientHeight
        }, 200);
    }
    function getRefrestToken() {
        //GoogleDilogFlowService("client_id=" + clientId + "&client_secret=" + clientSecret + "&refresh_token=" + RefreshToken + "&grant_type=refresh_token", refreshAccessTokenUrl, "application / x - www - form - urlencoded", "Text", undefined);
        GoogleDilogFlowService({ client_id: clientId, client_secret: clientSecret, refresh_token: RefreshToken, grant_type: "refresh_token" }, refreshAccessTokenUrl, "application/json; charset-utf-8", "json", undefined);
    }
}]);