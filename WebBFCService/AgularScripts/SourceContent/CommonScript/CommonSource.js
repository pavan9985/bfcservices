window.onscroll = function () { /*scrollFunction()*/ };

function sccrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("GoTop").style.display = "block";
    } else {
        document.getElementById("GoTop").style.display = "none";
    }
}

function GotoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// **********************   Allow Only Number In the Input Field Starts.   ****************
function validateOnlyNumbers(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

// **********************   Allow Only Number In the Input Field Ends.   ****************