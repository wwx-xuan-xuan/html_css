window.onload = function () {

    // 获取middle_title按钮
    var middle_title = document.querySelectorAll("div.middle_title > div");

    middle_title[0].onclick = function () {
        addActive(middle_title, 0)

    }
    middle_title[1].onclick = function () {
        addActive(middle_title, 1)

    }
    middle_title[2].onclick = function () {
        addActive(middle_title, 2)

    }


    // 获取立即购买按钮
    var bottom_buy = document.querySelectorAll("div.bottom_buy")[0]

    // 获取购买弹出框
    var buy_eject = document.querySelectorAll("div.buy_eject")[0]

    bottom_buy.onclick = function () {
        console.log(buy_eject.style.display)
        if (buy_eject.style.display == "") {
            buy_eject.style.display = "flex"
            buy_eject.style.opacity = "1"
        }
    }

    // 获取购买弹出框中的叉叉
    var buy_eject_off = document.querySelectorAll("div.buy_eject_off")[0]

    buy_eject_off.onclick = function () {
        buy_eject.style.display = ""
        buy_eject.style.opacity = "0"
    }


    // 获取商品重量
    var type1 = document.querySelectorAll("div.type1")[0]
    var type2 = document.querySelectorAll("div.type2")[0]

    var buy_eject_commodity_type = document.querySelectorAll("div.buy_eject_commodity_type")[0]

    var text = buy_eject_commodity_type.childNodes.item(1)
    var text_type1 = type1.childNodes.item(0)
    var text_type2 = type2.childNodes.item(0)

    console.log(text_type1)
    type1.onclick = function () {

        type1.className = "type1";
        type2.className = "type2";


        type1.className = "type2 active_type";
        var text = buy_eject_commodity_type.childNodes.item(1)

        var text_type1_change = document.createTextNode("‘ 2kg (不含) -2.5kg(含)’")
        buy_eject_commodity_type.replaceChild(text_type1_change, text)

    }
    type2.onclick = function () {

        type1.className = "type1";
        type2.className = "type2";


        type2.className = "type2 active_type"
        var text = buy_eject_commodity_type.childNodes.item(1)

        var text_type2_change = document.createTextNode("‘ 2.5kg (不含) -3kg(含)’")
        buy_eject_commodity_type.replaceChild(text_type2_change, text)

    }




    // 加减
    var num = document.querySelectorAll("div.num > img");

    var num_span = document.querySelectorAll("div.num > span")
    num[0].onclick = function () {
        var a = parseInt(num_span[0].innerHTML);

        if (a == 0) {
            a = 0
        } else {
            a -= 1;
        }

        num_span[0].innerHTML = a
    }
    num[1].onclick = function () {
        var a = parseInt(num_span[0].innerHTML);

        a += 1;

        num_span[0].innerHTML = a
    }



    //添加active属性函数
    function addActive(btn, j) {
        for (var i = 0; i < btn.length; i++) {

            btn[i].querySelectorAll("span")[0].className = "";

        }
        btn[j].querySelectorAll("span")[0].className += "active"

    }


}