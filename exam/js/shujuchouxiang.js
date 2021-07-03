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

// 获取最低价格
let min_prise_dom

// 获取最高价格
let max_prise_dom

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
    sort_order: 0,
    min_prise: 0,
    max_prise: 500,

    product_List: [
        // product_List_left
        {
            product_item: [{
                    img: '../images/orderFruitpic1.png',
                    title: '年货海南11111现摘榴莲',
                    name: '金枕/8斤',
                    preferential: '惠',
                    grade: 5.1,
                    buy_people: 1256,
                    price: 59
                },

                {
                    img: '../images/orderFruitpic3.png',
                    title: '大果香甜水果王',
                    name: '海南椰青/6个',
                    preferential: '惠',
                    grade: 4.9,
                    buy_people: 3333,
                    price: 35
                },

                {
                    img: '../images/orderFruitpic5.png',
                    title: '大果香甜水果王',
                    name: '海南椰青/6个',
                    preferential: '惠',
                    grade: 4.8,
                    buy_people: 1987,
                    price: 269
                },
                {
                    img: '../images/orderFruitpic5.png',
                    title: '大果香甜水果王',
                    name: '海南椰青/6个',
                    preferential: '惠',
                    grade: 4.8,
                    buy_people: 2367,
                    price: 199
                },
                {
                    img: '../images/orderFruitpic5.png',
                    title: '大果香甜水果王',
                    name: '海南椰青/6个',
                    preferential: '惠',
                    grade: 4.8,
                    buy_people: 550,
                    price: 400
                },
                {
                    img: '../images/orderFruitpic5.png',
                    title: '大果香甜水果王',
                    name: '海南椰青/6个',
                    preferential: '惠',
                    grade: 4.8,
                    buy_people: 303,
                    price: 500
                }

            ]

        },

        // product_List_right
        {
            product_item: [{
                    img: '../images/orderFruitpic1.png',
                    title: '年货海南22222现摘榴莲',
                    name: '金枕/8斤',
                    preferential: '惠',
                    grade: 5.0,
                    buy_people: 1256,
                    price: 59
                },

                {
                    img: '../images/orderFruitpic3.png',
                    title: '大果222香甜水果王',
                    name: '海南椰青/6个',
                    preferential: '惠',
                    grade: 4.9,
                    buy_people: 126,
                    price: 335
                },
                {
                    img: '../images/orderFruitpic3.png',
                    title: '大果222香甜水果王',
                    name: '海南椰青/6个',
                    preferential: '惠',
                    grade: 4.8,
                    buy_people: 320,
                    price: 235
                },
                {
                    img: '../images/orderFruitpic1.png',
                    title: '大果222香甜水果王',
                    name: '海南椰青/6个',
                    preferential: '惠',
                    grade: 4.7,
                    buy_people: 260,
                    price: 500
                },
                {
                    img: '../images/orderFruitpic3.png',
                    title: '大果222香甜水果王',
                    name: '海南椰青/6个',
                    preferential: '惠',
                    grade: 4.5,
                    buy_people: 160,
                    price: 490
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
        sortOrder(data.sort_order, product_List_left_or_right)

    } else {
        $('.product_List_left').css('display', 'none')
        $('.product_List_right').css('display', 'block')

        $('.product_List_right').empty()

        show_product()
        sortOrder(data.sort_order, product_List_left_or_right)
    }
}

// 渲染页面函数
function show_product() {
    let product_List = [$('.product_List_left'), $('.product_List_right')]

    for (let i = 0; i < data.product_List[data.product_List_left_or_right].product_item.length; i++) {
        // setData({product_List_left_or_right:data.product_List_left_or_right})
        product = "<div class='product_List_item'><div class='product_List_item_img'><img src=" + data.product_List[data.product_List_left_or_right].product_item[i].img + " alt=''></div><div class='product_List_item_details'><div class='item_details_name'>" + data.product_List[data.product_List_left_or_right].product_item[i].title + "</div><div class='item_details_unitPrice'>" + data.product_List[data.product_List_left_or_right].product_item[i].name + "</div><div class='item_details_discount'>" + data.product_List[data.product_List_left_or_right].product_item[i].preferential + "</div><div class='item_details_price'><div class='item_details_price_left'>" + data.product_List[data.product_List_left_or_right].product_item[i].grade + "分</div><div class='item_details_price_middle'>" + data.product_List[data.product_List_left_or_right].product_item[i].buy_people + "人购买</div><div class='item_details_price_right'>￥<span>" + data.product_List[data.product_List_left_or_right].product_item[i].price + "</span>起</div></div></div></div>"

        product_List[data.product_List_left_or_right].append(product)

    }

}


// order指定排序的标签，num指定升降序,0为降序，1为升序
function sort(order, num, left_right) {

    let leftRight = ['product_List_left', 'product_List_right']

    if (num) {
        var domList = $("." + leftRight[left_right] + " .product_List_item").get();
        domList.sort(function (a, b) {
            var prise = parseInt($(a).find(".item_details_price_right > span").text());
            var elOne = parseInt($(a).find("." + order + "").text());
            var elTwo = parseInt($(b).find("." + order + "").text());
            console.log(elOne)
            if (prise > data.max_prise || prise <= data.min_prise) {
                $(a).css('display', 'none')
            } else {
                $(a).css('display', 'flex')
            }

            if (elOne > elTwo) return 1;
            if (elOne < elTwo) return -1;
            return 0;
        });
        $("." + leftRight[left_right] + "").append(domList);
    } else {
        var domList = $("." + leftRight[left_right] + " .product_List_item").get();
        domList.sort(function (a, b) {
            var prise = parseInt($(a).find(".item_details_price_right > span").text());
            var elOne = parseInt($(a).find("." + order + "").text());
            var elTwo = parseInt($(b).find("." + order + "").text());

            if (prise > data.max_prise || prise <= data.min_prise) {
                $(a).css('display', 'none')
            } else {
                $(a).css('display', 'flex')
            }
            if (elOne > elTwo) return -1;
            if (elOne < elTwo) return 1;
            return 0;
        });
        $("." + leftRight[left_right] + "").append(domList);
    }
}

// 按指定的方式排序函数,num参数指定排序方式，left_right参数判断是左边还是右边
function sortOrder(num, left_right) {

    // 综合排序
    if (num === 0) {
        sort("item_details_price_left", 0, left_right)

    } else if (num === 1) {
        // 销量排序
        sort("item_details_price_middle", 0, left_right)

    } else if (num === 2) {
        // 好评优先
        sort("item_details_price_left", 0, left_right)

    } else if (num === 3) {
        // 低价优先
        sort("item_details_price_right > span", 1, left_right)


    } else if (num === 4) {
        // 高价优先
        sort("item_details_price_right > span", 0, left_right)
    }
}



window.onload = function () {

    // 初始化页面
    show_product()
    // 获取新鲜水果按钮
    label_Top = document.querySelectorAll("div.label_Top > div");

    // 获取左，右商品
    product_List_left = document.querySelectorAll("div.product_List_left")[0];
    product_List_right = document.querySelectorAll("div.product_List_right")[0];

    label_Top[0].onclick = function () {
        addActive(this);
        setData({
            product_List_left_or_right: 0
        })
        product_List_left_or_right_change()
        sortOrder(data.sort_order, data.product_List_left_or_right);

    }
    label_Top[1].onclick = function () {
        addActive(this);
        setData({
            product_List_left_or_right: 1
        })
        product_List_left_or_right_change()
        sortOrder(data.sort_order, data.product_List_left_or_right);

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
            down_left_li[this.num].style.color = "#1AC4DD";
            setData({
                sort_order: this.num
            })
            sortOrder(data.sort_order, data.product_List_left_or_right)
        }
    }


    // 获取最低价格
    min_prise_dom = $('.down_right_prise > span').eq(0);
    // 获取最高价格
    max_prise_dom = $('.down_right_prise > span').eq(1);


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
        // sortOrder(3,data.product_List_left_or_right);

    }
    words.onclick = function () {
        transparent(drop_down_left[0], 500, 0)
        // sortOrder(3,data.product_List_left_or_right);

    }


    // 获取右边下拉框确定按钮
    var down_right_btn = document.querySelectorAll("div.down_right_btn")[0];
    down_right_btn.onclick = function () {
        transparent(drop_down_right[0], 500, 1);
        // sortOrder(data.sort_order,data.product_List_left_or_right);
        sortOrder(data.sort_order, data.product_List_left_or_right)

        console.log('asd')
    }

}