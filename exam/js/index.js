window.onload = function () {

    // 获取新鲜水果按钮
    var label_Top = document.querySelectorAll("div.label_Top > div");

    // 获取左，右商品
    var product_List_left = document.querySelectorAll("div.product_List_left")[0];
    var product_List_right = document.querySelectorAll("div.product_List_right")[0];


    label_Top[0].onclick = function () {
        addActive(this);
        product_List_left.style.display = "block";
        product_List_right.style.display = "none";


    }
    label_Top[1].onclick = function () {

        addActive(this)
        product_List_right.style.display = "block"
        product_List_left.style.display = "none"
    }


    // 获取排序列表下拉
    var label_Sort = document.querySelectorAll("div.label_Sort > div")

    var drop_down_left = document.querySelectorAll("div.drop_down_left")
    var drop_down_right = document.querySelectorAll("div.drop_down_right")

    label_Sort[0].onclick = function (event) {

        // 判断另外一边的下拉框是否在下拉
        if (drop_down_right[0].style.display == "block") {

            transparent(drop_down_right[0], 0, 1)

        }



        //判断自己这里的下拉框是否在下拉
        if (drop_down_left[0].style.display == "block") {

            transparent(drop_down_left[0], 500, 0)

        } else {

            notransparent(drop_down_left[0], 0)


        }


    }


    label_Sort[1].onclick = function () {

        // 判断另外一边的下拉框是否在下拉
        if (drop_down_left[0].style.display == "block") {

            transparent(drop_down_left[0], 0, 0)

        }


        //判断自己这里的下拉框是否在下拉
        if (drop_down_right[0].style.display == "block") {
            transparent(drop_down_right[0], 500, 1)

        } else {

            notransparent(drop_down_right[0], 1)

        }
    }



    // 获取排序下拉里的li
    var down_left_li = drop_down_left[0].querySelectorAll("li")

    //默认第一个位蓝色
    down_left_li[0].style.color = "#1AC4DD"

    //循环遍历绑定点击函数
    for (var i = 0; i < down_left_li.length; i++) {

        down_left_li[i].num = i;
        console.log(down_left_li)
        

        down_left_li[i].onclick = function () {

            //每点击一次循环清除样式一次
            for (var i = 0; i < down_left_li.length; i++) {
                down_left_li[i].style.color = ""
            }

            down_left_li[this.num].style.color = "#1AC4DD"
        }

    }



    // 获取拖动上条
    var minimumPrice_scopeBar = document.querySelectorAll("div.minimumPrice_scopeBar")[0]

    var minimumPrice_scopeBar_item = minimumPrice_scopeBar.querySelectorAll("div")

    roll(minimumPrice_scopeBar, minimumPrice_scopeBar_item)

    // 获取下拖动条
    var highestPrice_scopeBar = document.querySelectorAll("div.highestPrice_scopeBar")[0]

    var highestPrice_scopeBar_item = highestPrice_scopeBar.querySelectorAll("div")

    roll(highestPrice_scopeBar, highestPrice_scopeBar_item)


    // 获取蒙版
    var down = document.querySelectorAll("div.down")[0];
    var words = document.querySelectorAll("div.words")[0];

    down.onclick = function () {
        transparent(drop_down_right[0], 500, 1)
    }
    words.onclick = function () {
        transparent(drop_down_left[0], 500, 0)
    }


    // 获取右边下拉框确定按钮
    var down_right_btn = document.querySelectorAll("div.down_right_btn")[0];
    down_right_btn.onclick = function () {
        transparent(drop_down_right[0], 500, 1)
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

    function roll(bar, item) {
        // 移动端页面和pc端鼠标点击移动事件不同
        item[1].ontouchstart = function (event) {


            bar.ontouchmove = function (event) {

                //获取横坐标
                var x1 = event.touches[0].clientX;


                // 判断边界问题并实时给左中右三个控件赋x值
                if (x1 <= 70) {
                    item[1].style.left = 0 + "px"
                    item[0].style.width = 0 + "px"
                    item[2].style.width = 250 + "px"

                } else if (x1 >= 330) {
                    item[1].style.left = 260 + "px";
                    item[0].style.width = 260 + "px"
                    item[2].style.width = 0 + "px"

                } else {
                    item[1].style.left = x1 - 70 + "px";
                    item[0].style.width = x1 - 70 + "px"
                    item[2].style.width = 320 - x1 + "px"

                }

            }


            // 最后关闭
            bar.ontouchend = function () {
                document.ontouchmove = null;
            };
        }
    }
}