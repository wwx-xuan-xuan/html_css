// 水果商家item
let fruit_item = []

// 每个商家的总钱数
let sum_money = 0;


let data = {
    payment_show:false,
    pay_mode:0
}

function setData(newdata){
    for( let key in newdata){
        data[key] = newdata[key]
    }

    
}

// 按水果商家item创建商家标签函数
function for_fruit_item() {

    var fruit = [];

    var total_price = 0;

    var sum_youhui = -10;

    for (var i = 0; i < fruit_item.length; i++) {
        
        $(".item").append("<div class='fruit_merchants_one'><div class='fruit_merchants_one_title'><span><img src='./assets/shop.png' alt=''></span><span>" + fruit_item[i].fruit_merchants_title + "</span><span><img src='./assets/arrowRight.png' alt=''></span></div> <div class='product_item'></div><div class='delivery_mode'><div class='left'>配送方式</div><div class='right'>普通快递 "+fruit_item[i].delivery_mode_money+"元<img src='./assets/arrowRight.png' alt=''></div></div><div class='delivery_mode discount'><div class='left'>商家优惠</div><div class='right'>"+fruit_item[i].discount+"元<img src='./assets/arrowRight.png' alt=''></div></div><div class='delivery_mode total'><div class='left'></div><div class='right'><span>合计</span><span>￥"+sumMoney(i)+"</span><span>.00</span></div></div></div>")

        // 总优惠
        sum_youhui += fruit_item[i].discount

        // 总价
        total_price += sumMoney(i)
        let length = fruit_item[i].product_item.length
        for (var j = 0; j < length; j++) {

            // fruit_item[0] = 
            // console.log("<div class='product'><div class='product_img'><img src='"+fruit_item[i].product_item[j].product_img+"' alt=''></div><div class='product_details'><div class='name'>"+fruit_item[i].product_item[j].product_details_name+"</div><div class='weight'>"+fruit_item[i].product_item[j].product_details_weight+"</div></div><div class='price'><div>￥"+fruit_item[i].product_item[j].price+"</div><div class='num'>x"+fruit_item[i].product_item[j].num+"</div></div></div>")
            $(".product_item").eq(i).append("<div class='product'><div class='product_img'><img src='" + fruit_item[i].product_item[j].product_img + "' alt=''></div><div class='product_details'><div class='name'>" + fruit_item[i].product_item[j].product_details_name + "</div><div class='weight'>" + fruit_item[i].product_item[j].product_details_weight + "</div></div><div class='price'><div>￥" + fruit_item[i].product_item[j].price + "</div><div class='num'>x" + fruit_item[i].product_item[j].num + "</div></div></div>")
        }
    }

    

    // 改变总价
    $('.bottom_money_top > span').text("￥"+total_price);
    // 改变总件数
    $('.bottom_num').text("共 "+fruit_item.length+" 件");

    // 改变总优惠
    $('.bottom_money_bottom > span').text("￥"+Math.abs(sum_youhui));
    // 改变支付页面的数据
    $('.payment_money > span').eq(1).text(total_price);


    return fruit
}

// 每个商家的总钱数的函数，变量i是水果商家的序号
function sumMoney(i) {

    let sum_money= fruit_item[i].delivery_mode_money + fruit_item[i].discount
    let length = fruit_item[i].product_item.length
    for (var j = 0; j < length; j++) {
        sum_money += fruit_item[i].product_item[j].price * fruit_item[i].product_item[j].num

    }

    return sum_money

}

// 显示结算页面
function show(){
    $(".payment").css("display", "block")
    $(".meng").css("display", "block")
}

// 隐藏结算页面
function hidden(){
    $(".payment").css("display", "none")
    $(".meng").css("display", "none")
}

// 微信支付宝勾勾切换
function change(dian){
    $('.payment_wx > img').eq(0).attr("src","./assets/choiceIcon.png")
    $('.payment_zfb > img').eq(0).attr("src","./assets/choiceIcon.png")

    dian.attr("src","./assets/choicedIcon.png")

}


$(function () {

    // 给水果商家item变量值
    fruit_item = [{
            // 水果商家1
            fruit_merchants_title: "水果商家1",

            // 水果商家里面的几种水果
            product_item: [
                // 水果1
                {
                    product_img: "./assets/orderFruitpic1.png",
                    product_details_name: "三亚当季时令热带水果网红金枕榴莲",
                    product_details_weight: "2.5kg(不含)-3.0kg(含)",

                    price: 1121,
                    num: 2
                },

                // 水果2
                {
                    product_img: "./assets/orderFruitpic1.png",
                    product_details_name: "三亚当季时令热带水果网红金枕榴莲",
                    product_details_weight: "2.5kg(不含)-3.0kg(含)",

                    price: 111,
                    num: 2
                }

            ],
            delivery_mode_money: 10,
            discount: -100,

        },
        {
            // 水果商家2
            fruit_merchants_title: "水果商家2",

            // 水果商家里面的几种水果
            product_item: [
                // 水果1
                {
                    product_img: "./assets/orderFruitpic3.png",
                    product_details_name: "三亚当季时令热带水果网红金枕榴莲",
                    product_details_weight: "2.5kg(不含)-3.0kg(含)",

                    price: 121,
                    num: 5
                },

                // 水果2
                {
                    product_img: "./assets/orderFruitpic1.png",
                    product_details_name: "三亚当季时令热带水果网红金枕榴莲",
                    product_details_weight: "2.5kg(不含)-3.0kg(含)",

                    price: 1101,
                    num: 2
                }

            ],
            delivery_mode_money: 10,
            discount: -10,

        },
        
        {
            // 水果商家2
            fruit_merchants_title: "水果商家3",

            // 水果商家里面的几种水果
            product_item: [
                // 水果1
                {
                    product_img: "./assets/orderFruitpic5.png",
                    product_details_name: "三亚当季时令热带水果网红金枕榴莲",
                    product_details_weight: "2.5kg(不含)-3.0kg(含)",

                    price: 121,
                    num: 5
                },

                // 水果2
                {
                    product_img: "./assets/orderFruitpic1.png",
                    product_details_name: "三亚当季时令热带水果网红金枕榴莲",
                    product_details_weight: "2.5kg(不含)-3.0kg(含)",

                    price: 210,
                    num: 2
                }

            ],
            delivery_mode_money: 10,
            discount: -10,

        },
    ];



    // 调用for_fruit_item()函数，
    for_fruit_item()
    // console.log(fruit_item[0].product_item[length])

    // 点击购买按钮设置为显示结算页面
    $(".bottom_buy").click(function () {
        show()
    })


    // 点击叉叉隐藏结算页面
    $(".payment_title > img").click(function () {
        hidden()
    })

    // 点击背景隐藏结算页面
    $(".meng").click(function () {
        hidden()
    })


    // 点击支付按钮先设置为隐藏结算页面
    $(".pay").click(function () {
        hidden()
    })

    // 勾勾的切换
        $('payment_wx > img').eq(0).click(function(){
            change(this)
        })
        $('.payment_wx > img').eq(0).click(function(){
            change($('.payment_wx > img').eq(0))
        })
        $('.payment_zfb > img').eq(0).click(function(){
            change($('.payment_zfb > img').eq(0))
        })

    // $(".item").append("<div class='fruit_merchants_one'><div class='fruit_merchants_one_title'><span><img src='./assets/shop.png' alt=''></span><span>"+fruit_item[0].fruit_merchants_title+"</span><span><img src='./assets/arrowRight.png' alt=''></span></div> <div class='product_item'></div><div class='delivery_mode'><div class='left'>配送方式</div><div class='right'>普通快递 12元<img src='./assets/arrowRight.png' alt=''></div></div><div class='delivery_mode discount'><div class='left'>商家优惠</div><div class='right'>-10元<img src='./assets/arrowRight.png' alt=''></div></div><div class='delivery_mode total'><div class='left'></div><div class='right'><span>合计</span><span>￥146</span><span>.00</span></div></div></div>")
    // $(".product_item").append(fruit_product_item)
})