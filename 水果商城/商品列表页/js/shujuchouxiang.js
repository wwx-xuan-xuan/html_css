// 获取新鲜水果按钮
let label_Top;

// 获取左，右商品
let product_List_left;
let product_List_right;

// 获取排序列表下拉
let label_Sort;

let drop_down_left;
let drop_down_right;


// 获取排序下拉里的li
let down_left_li;


// 获取拖动上条
let minimumPrice_scopeBar;
let minimumPrice_scopeBar_item;



// 获取下拖动条
let highestPrice_scopeBar;
let highestPrice_scopeBar_item;


// 获取蒙版
let down;
let words;


// 获取右边下拉框确定按钮
let down_right_btn;


// 
let product;

let data = {
    label_Top_choose: true,
    product_List_left_or_right: 0,
    drop_down_pull: 0,
    sort_order:0,

    product_List: [
        // product_List_left
        {
            product_item: [{
                    img: './assets/orderFruitpic1.png',
                    title: '年货海南11111现摘榴莲',
                    name: '金枕/8斤',
                    preferential: true,
                    grade: 5.1,
                    buy_people: 1256,
                    price: 59
                },

                {
                    img: './assets/orderFruitpic3.png',
                    title: '大果香甜水果王',
                    name: '海南椰青/6个',
                    preferential: true,
                    grade: 4.9,
                    buy_people: 1256,
                    price: 35
                }

            ]

        },

        // product_List_right
        {
            product_item: [{
                    img: './assets/orderFruitpic1.png',
                    title: '年货海南22222现摘榴莲',
                    name: '金枕/8斤',
                    preferential: true,
                    grade: 5.0,
                    buy_people: 1256,
                    price: 59
                },

                {
                    img: './assets/orderFruitpic3.png',
                    title: '大果222香甜水果王',
                    name: '海南椰青/6个',
                    preferential: true,
                    grade: 4.9,
                    buy_people: 1256,
                    price: 35
                },

            ]
        }
    ]
}



function setData(newData) {
    for (let key in newData) {
        data[key] = newData[key]
    }
}

// 新鲜水果——海南特产切换函数
function product_List_left_or_right_change() {
    let product_List_left_or_right = data.product_List_left_or_right;

    if (product_List_left_or_right === 0) {
        $('.product_List_left').css('display', 'block')
        $('.product_List_right').css('display', 'none')

        $('.product_List_left').empty()
        show_product()
    } else {
        $('.product_List_left').css('display', 'none')
        $('.product_List_right').css('display', 'block')

        $('.product_List_right').empty()
        show_product()
    }



}


function show_product(){

    let product_List = [$('.product_List_left'),$('.product_List_right')]
    for (let i = 0; i < data.product_List[data.product_List_left_or_right].product_item.length; i++) {
    
        // setData({product_List_left_or_right:data.product_List_left_or_right})
        product = "<div class='product_List_item'><div class='product_List_item_img'><img src=" + data.product_List[data.product_List_left_or_right].product_item[i].img + " alt=''></div><div class='product_List_item_details'><div class='item_details_name'>" + data.product_List[data.product_List_left_or_right].product_item[i].title + "</div><div class='item_details_unitPrice'>" + data.product_List[data.product_List_left_or_right].product_item[i].name + "</div><div class='item_details_discount'>" + data.product_List[data.product_List_left_or_right].product_item[i].preferential + "</div><div class='item_details_price'><div class='item_details_price_left'>" + data.product_List[data.product_List_left_or_right].product_item[i].grade + "分</div><div class='item_details_price_middle'>" + data.product_List[data.product_List_left_or_right].product_item[i].buy_people + "人购买</div><div class='item_details_price_right'>￥<span>" + data.product_List[data.product_List_left_or_right].product_item[i].price + "</span>起</div></div></div></div>"

        product_List[data.product_List_left_or_right].append(product)

    }
}





window.onload = function () {


    // product = "<div class='product_List_item'><div class='product_List_item_img'><img src=" + data.product_List[0].product_item[i].img + " alt=''></div><div class='product_List_item_details'><div class='item_details_name'>" + data.product_List[0].product_item[0].title + "</div><div class='item_details_unitPrice'>" + data.product_List[0].product_item[0].name + "</div><div class='item_details_discount'>" + data.product_List[0].product_item[0].preferential + "</div><div class='item_details_price'><div class='item_details_price_left'>" + data.product_List[0].product_item[0].grade + "分</div><div class='item_details_price_middle'>" + data.product_List[0].product_item[0].buy_people + "人购买</div><div class='item_details_price_right'>￥<span>" + data.product_List[0].product_item[0].price + "</span>起</div></div></div></div>"

    // 初始化页面
    show_product()
    // 获取新鲜水果按钮
    label_Top = document.querySelectorAll("div.label_Top > div");

    // 获取左，右商品
    product_List_left = document.querySelectorAll("div.product_List_left")[0];
    product_List_right = document.querySelectorAll("div.product_List_right")[0];


    // console.log(data.product_List[product_List_left_or_right].product_item.length)


    label_Top[0].onclick = function () {
        addActive(this);
        setData({product_List_left_or_right:0})
        product_List_left_or_right_change()


    }
    label_Top[1].onclick = function () {
        addActive(this);
        setData({product_List_left_or_right:1})
        product_List_left_or_right_change()
    }


    // 获取排序列表下拉
    label_Sort = document.querySelectorAll("div.label_Sort > div")

    drop_down_left = document.querySelectorAll("div.drop_down_left")
    drop_down_right = document.querySelectorAll("div.drop_down_right")

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
    down_left_li = drop_down_left[0].querySelectorAll("li")

    //默认第一个位蓝色
    down_left_li[0].style.color = "#1AC4DD"

    //循环遍历绑定点击函数
    for (var i = 0; i < down_left_li.length; i++) {

        down_left_li[i].num = i;
        down_left_li[i].onclick = function () {

            //每点击一次循环清除样式一次
            for (var i = 0; i < down_left_li.length; i++) {
                down_left_li[i].style.color = ""
            }

            down_left_li[this.num].style.color = "#1AC4DD"
        }

    }



    // 获取拖动上条
    minimumPrice_scopeBar = document.querySelectorAll("div.minimumPrice_scopeBar")[0]

    minimumPrice_scopeBar_item = minimumPrice_scopeBar.querySelectorAll("div")

    roll(minimumPrice_scopeBar, minimumPrice_scopeBar_item)

    // 获取下拖动条
    highestPrice_scopeBar = document.querySelectorAll("div.highestPrice_scopeBar")[0]

    highestPrice_scopeBar_item = highestPrice_scopeBar.querySelectorAll("div")

    roll(highestPrice_scopeBar, highestPrice_scopeBar_item)


    // 获取蒙版
    down = document.querySelectorAll("div.down")[0];
    words = document.querySelectorAll("div.words")[0];

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