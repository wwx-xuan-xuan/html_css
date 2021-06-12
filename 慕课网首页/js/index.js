window.onload = function () {

    var oDiv = document.getElementById("top");

    function getScrollTop() {
        var scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    }
    document.onscroll = function () {
        if(getScrollTop() != 0){
            oDiv.style.cssText="h = 0px solid black"
        }

    }
}