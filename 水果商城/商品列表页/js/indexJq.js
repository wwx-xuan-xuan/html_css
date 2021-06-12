$(function () {
    // 获取新鲜水果按钮
    var label_Top =$(".label_Top > div")
    console.log(label_Top)

    // 获取左，右商品
    var product_List_left = $(".product_List_left")
    var product_List_right =$(".product_List_right")


    $(".label_Top > div:eq(0)").click(function(){
        addActive(this);

        $(".product_List_left").css({
            'display':'block'
        })
        $(".product_List_right").css('display','none')
    })


    
    $(".label_Top > div:eq(1)").click(function () {

        addActive(this)
        product_List_right.css('display','block')
        product_List_left.css({
            'display':'none'
        })
    })


    // 获取排序列表下拉
    var label_Sort = $(".label_Sort > div")

    var drop_down_left = $(".drop_down_left")
    var drop_down_right = $(".drop_down_right")

    $(".label_Sort > div:eq(0)").click(function (event) {

        // 判断另外一边的下拉框是否在下拉
        if (drop_down_right.css('display') == "block") {

            transparent(drop_down_right[0], 0, 1)

        }



        //判断自己这里的下拉框是否在下拉
        if (drop_down_left.css('display') == "block") {

            transparent(drop_down_left[0], 500, 0)

        } else {

            notransparent(drop_down_left[0], 0)


        }


    })


    $(".label_Sort > div:eq(1)").click(function () {

        // 判断另外一边的下拉框是否在下拉
        if (drop_down_left.css('display') == "block") {

            transparent(drop_down_left[0], 0, 0)

        }


        //判断自己这里的下拉框是否在下拉
        if (drop_down_right.css('display') == "block") {
            transparent(drop_down_right[0], 500, 1)

        } else {

            notransparent(drop_down_right[0], 1)

        }
    })



    // 获取排序下拉里的li
    var down_left_li = drop_down_left[0].querySelectorAll("li")

    //默认第一个位蓝色
    $(".drop_down_left  li:eq(0)").css('color','#1AC4DD')

    //循环遍历绑定点击函数
    for (var i = 0; i < down_left_li.length; i++) {

        down_left_li[i].num = i;

        console.log($(".drop_down_left  li"))

        $(".drop_down_left  li").eq(i).click(function () {

            //每点击一次循环清除样式一次
            for (var i = 0; i < down_left_li.length; i++) {
                down_left_li[i].style.color = ""
            }

            down_left_li[this.num].style.color = "#1AC4DD"
        })

    }



    // 获取拖动上条
    var minimumPrice_scopeBar = document.querySelectorAll("div.minimumPrice_scopeBar")[0]

    var minimumPrice_scopeBar_item = $('minimumPrice_scopeBar > div')

    roll(minimumPrice_scopeBar, minimumPrice_scopeBar_item)

    // 获取下拖动条
    var highestPrice_scopeBar = document.querySelectorAll("div.highestPrice_scopeBar")[0]

    var highestPrice_scopeBar_item = $('highestPrice_scopeBar > div')

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
        item.eq(1).on('touchstart',function (event) {


            bar.ontouchmove = function (event) {

                //获取横坐标
                var x1 = event.touches[0].clientX;


                // 判断边界问题并实时给左中右三个控件赋x值
                if (x1 <= 70) {
                    item.eq(1).css('left',0)
                    item.eq(0).css('width',0)
                    item.eq(2).css('width',250)

                } else if (x1 >= 330) {
                    item.eq(1).css('left',260)
                    item.eq(0).css('width',260)
                    item.eq(2).css('width',0)

                } else {
                    item.eq(1).css('left',x1 -70)
                    item.eq(0).css('width',x1-70)
                    item.eq(2).css('width',320-x1)

                }

            }


            // 最后关闭
            bar.ontouchend = function () {
                document.ontouchmove = null;
            };
        })
    }

})