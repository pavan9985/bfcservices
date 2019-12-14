window.onscroll = function () { scrollFunction() };

function scrollFunction() {
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