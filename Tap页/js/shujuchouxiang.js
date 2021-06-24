
// tap_title按钮
let tap_title

// tap_title按钮父元素（事件委托用）
let tap

// tap_page页面
let tap_page

let data = {
    showIndex:0
}


function setData(newData){

    for(let key in newData){
        data[key] = newData[key]
    }

    tap_change()
}


// 封装Tap页函数
function tap_change() {

    // 把tap的num属性拿出来就可以知道我点的是哪个
    // var index = tap.num;

    let showIndex = data.showIndex;

    for (var i = 0; i < tap_title.length; i++) {

        if (tap_title[i].num === showIndex) {
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
        setData({showIndex: e.target.num})
    }

    // 给每个tap_title一个num属性
    for (let i = 0; i < tap_title.length; i++) {
        tap_title[i].num = i;
    }


}