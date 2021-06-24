// title_list
let title_list;

// content列表
let content_list

let big_list

let data = {
    // contentIsShow:false,
    showIndex: 0
}

// 数据变化驱动页面变化
function setData(newData) {
    for (let key in newData) { 
        data[key] = newData[key]
    }

    changeDOM()
}


function changeDOM() {

    let showIndex = data.showIndex;


    for (let i = 0; i < content_list.length; i++) {
        if (content_list[i].num != showIndex) {
            content_list[i].style.height = "0px"
        } else {
            if (content_list[i].style.height === "80px") {
                content_list[i].style.height = "0px"
            } else {
                content_list[i].style.height = "80px"
            }
        }
    }
}


window.onload = function () {

    // 获取title_list
    title_list = document.querySelectorAll("div.list_item_title");
    content_list = document.querySelectorAll("div.list_item_content");

    big_list = document.querySelectorAll('div.list')[0]

    // for循环给每个content_list和title_list标记
    for (let i = 0; i < content_list.length; i++) {
        content_list[i].num = i
        title_list[i].num = i

    }

    big_list.onclick = function (e) {
        // console.log(e)
        setData({
            showIndex: e.target.num
        })
    }

}