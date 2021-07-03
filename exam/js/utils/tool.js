// 滚动条和价格函数
function roll(bar, item) {
    // 移动端页面和pc端鼠标点击移动事件不同
    item[1].ontouchstart = function (event) {

        // 判断用户是点的哪个滚动条
        if (bar === minimumPrice_scopeBar) {
            bar.ontouchmove = function (event) {
                //获取横坐标
                var x1 = event.touches[0].clientX / 16;
                // 判断边界问题并实时给左中右三个控件赋x值
                if (x1 <= 5) {
                    item[1].style.left = 0 + "rem"
                    item[0].style.width = 0 + "rem"
                    item[2].style.width = 17 + "rem"
                    setData({
                        min_prise: 0,
                    })

                } else if (x1 >= 20.625) {
                    item[1].style.left = 16.25 + "rem";
                    item[0].style.width = 16.25 + "rem"
                    item[2].style.width = 0 + "rem"
                    setData({
                        min_prise: 250
                    })

                } else {
                    item[1].style.left = x1 - 4.375 + "rem";
                    item[0].style.width = x1 - 4.375 + "rem"
                    item[2].style.width = 20 - x1 + "rem"
                    setData({
                        min_prise: parseInt((x1) / 20 * 250)
                    })

                }
                min_max_prise()
            }
        } else if (bar === highestPrice_scopeBar) {
            bar.ontouchmove = function (event) {
                //获取横坐标
                var x1 = event.touches[0].clientX / 16;
                // 判断边界问题并实时给左中右三个控件赋x值
                if (x1 <= 5) {
                    item[1].style.left = 0 + "rem"
                    item[0].style.width = 0 + "rem"
                    item[2].style.width = 17 + "rem"
                    setData({
                        max_prise: 250,
                    })

                } else if (x1 >= 20.625) {
                    item[1].style.left = 16.25 + "rem";
                    item[0].style.width = 16.25 + "rem"
                    item[2].style.width = 0 + "rem"
                    setData({
                        max_prise: 500
                    })

                } else {
                    item[1].style.left = x1 - 4.375 + "rem";
                    item[0].style.width = x1 - 4.375 + "rem"
                    item[2].style.width = 20 - x1 + "rem"
                    setData({
                        max_prise: parseInt((x1) / 20 * 500)
                    })

                }
                min_max_prise()
            }
        }

        // 最后关闭
        bar.ontouchend = function () {
            document.ontouchmove = null;
        };
    }
}


// 更改价格函数 
function min_max_prise() {
    let min = data.min_prise;
    let max = data.max_prise;

    min_prise_dom.text(min)
    max_prise_dom.text(max)
}




//添加active属性函数
function addActive(btn) {
    for (var i = 0; i < label_Top.length; i++) {

        label_Top[i].className = "label_Top_List";

    }
    btn.className += " active"
}

// 透明
function transparent(drop, time, i) {
    // 下拉图标改变

    label_Sort[i].querySelectorAll("i")[0].className == "fa fa-caret-up" ? label_Sort[i].querySelectorAll("i")[0].className = "fa fa-caret-down" : label_Sort[i].querySelectorAll("i")[0].className = "fa fa-caret-up"


    //透明
    drop.style.opacity = 0;

    //这里要等待过渡的1s，然后才消失
    setTimeout(function () {
        drop.style.display = "none"

    }, time);
}
// 不透明
function notransparent(drop, i) {
    // 下拉图标改变
    label_Sort[i].querySelectorAll("i")[0].className == "fa fa-caret-up" ? label_Sort[i].querySelectorAll("i")[0].className = "fa fa-caret-down" : label_Sort[i].querySelectorAll("i")[0].className = "fa fa-caret-up"

    drop.style.display = "block"
    //不透明
    drop.style.opacity = 1;
}