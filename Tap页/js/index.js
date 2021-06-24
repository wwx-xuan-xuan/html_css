
// tap_title按钮
var tap_title

// tap_title按钮父元素（事件委托用）
var tap

// tap_page页面
var tap_page



// 封装Tap页函数
function tap_change(tap) {

    // 把tap的num属性拿出来就可以知道我点的是哪个
    var index = tap.num;

    for (var i = 0; i < tap_title.length; i++) {

        if (tap_title[i].num === index) {
            tap_title[i].className = 'choose';
            tap_page[i].className = 'show';
        } else {
            tap_title[i].className = '';
            tap_page[i].className = '';
        }
    }
}


window.onload = function () {

    // 获取tap_title按钮
    tap_title = document.querySelectorAll("div.tap_title > div");
    tap = document.querySelectorAll("div.tap_title");

    // 获取tap_page页面
    tap_page = document.querySelectorAll("div.tap_page > div");

    // 事件代理
    tap[0].onclick = function (e) {
        tap_change(e.target)
    }

    // 给每个tap_title一个num属性
    for (var i = 0; i < tap_title.length; i++) {
        tap_title[i].num = i;
    }


}