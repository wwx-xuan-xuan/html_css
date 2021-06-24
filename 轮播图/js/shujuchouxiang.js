
//获取所有的a 
let allA
let imgList

// 定时器
let qiehuan

// 获取左右按钮
let btnLeft;
let btnRight;
 
let data = {
    index: 0,

}


function setData(newData) {

    for (let key in newData) {
        data[key] = newData[key]
    }

    if (data.index > imgList.length - 1) {
        data.index = 0
    }else if(data.index < 0){
        data.index = imgList.length - 1
    }
    change()

}


//创建切换函数
function change() {
    let index = data.index;


    //设置默认的选中效果
    allA[index].style.width = 25 + "px"

    //设置默认图片
    imgList[index].style.display = "block"

    //循环一次
    for (let j = 0; j < allA.length; j++) {
        allA[j].style.width = 10 + "px";

        if (imgList[j].style.display == "block") {

            //透明
            imgList[j].style.opacity = 0;

        } else {
            imgList[j].style.display = "none"
        }


        //这里的定时器不能掉
        setTimeout(function () {
            imgList[index].style.opacity = 1;
        }, 0);


        //显示图片和点点
        allA[index].style.width = 25 + "px"
        imgList[index].style.display = "block";

    }
}


// 创建清除开启定时器函数
function time(){
    clearInterval(qiehuan)

    qiehuan = setInterval(function () {
        setData({
            index: data.index + 1
        })
    }, 3000)
}


window.onload = function () {

    // 获取图片列表
    imgList = document.getElementsByTagName("li");

    // 获取左右按钮
    btnLeft = document.querySelectorAll("div.btn_Left");
    btnRight = document.querySelectorAll("div.btn_Right");


    //获取所有的a 
    allA = document.querySelectorAll("div.navDiv > a");



    //每三秒切换一次
    qiehuan = setInterval(function () {

        setData({
            index: data.index + 1
        })

    }, 3000)


    //点击切换到指定图片
    for (let i = 0; i < allA.length; i++) {
        //循环的时候给每a添加一个num属性
        allA[i].num = i;

        //绑定单机乡音函数
        allA[i].onclick = function () {
            //更新index
            setData({
                index: this.num
            })
            time()
        }
    }



    // 绑定左右按钮点击事件

    btnLeft[0].onclick = function () {

        //更新index
        setData({
            index: data.index - 1
        })
        time()

    }

    btnRight[0].onclick = function () {

        //更新index
        setData({
            index: data.index + 1
        })
        time()

    }


}
















// let imgs = [
//     1,
//     2,
//     3,
//     4,
//     5
// ]

// // 核心变量写在一个对象中（一切的变化都源于核心变量的变化----数据驱动页面变化）
// let data = {
//     currentIndex: 0,
//     currentYuanIsKuan: true
// }


// // 页面的dom是怎么随着数据的变化而变化的呢
// function changeDOM() {
//     let currentIndex = data.currentIndex;
//     let currentYuanIsKuan = data.currentYuanIsKuan;

//     imgDOM.setAttribute("src")
// }



// // 数据变化驱动页面变化
// function setData(newData) {
//     for (let key in newData) {
//         daya[key] = newData[key]
//     }

//     changeDOM()
// }


// $(function () {
//     imgDOM = document.getElementsByTagName("img")[0];

//     diansDOM = document.getElementsByClassName("dians")

//     // 业务
//     setInterval(() => {
//         setData({
//             currentYuanIsKuan: false
//         });
//         setData({
//             currentYuanIsKuan: true,
//             currentIndex: data.currentIndex + 1
//         });
//     }, 2000);
// })
