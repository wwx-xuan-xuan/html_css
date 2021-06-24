// 内容区
let bullet_chat_content;
let bullet_chat;

// 输入框
let input;

// 发送按钮
let button;

// data对象有控制速度和按钮发送的属性
let data = {
    delay: 20,
    keyCode:13,
    speed:6
}


function setData(newData){
    for(let key in newData){
        data[key] = newData[key]
    }
    
}

function show(data) {
    // 创建弹幕节点
    let span = document.createElement('span');

    //判断输入框里面是否有东西
    if (input.value == "") {
        return;
    }

    // 创建弹幕文本
    let span_text = document.createTextNode(input.value);

    // 将文本节点添加到属性节点里面
    span.appendChild(span_text);

    // 将属性节点添加到内容框里面
    bullet_chat.appendChild(span);

    // console.log(span.offsetWidth)

    // 随机span的位置
    span.style.top = Math.round(Math.random() * 200) + 'px';
    span.style.right = -span.offsetWidth + 'px';

    // 弹幕速度
    span.style.transition = data.speed+'s'


    // 将弹幕从右到左移动
    setTimeout(() => {
        span.style.right = 800 + 'px';
    }, data.delay);

    // 清除输入框里面的东西
    input.value = ""
}

// 指定按空格按钮发送
function keydown(e) {
    if (e.keyCode === data.keyCode) {
        show(data)
    }
}
window.onload = function () {
    // 获取内容区
    bullet_chat_content = document.querySelectorAll("div.bullet_chat_content")[0];
    bullet_chat = document.querySelectorAll("div.bullet_chat")[0];


    // 获取输入框
    input = document.querySelectorAll("input.input")[0];

    // 获取发送按钮
    button = document.querySelectorAll("input.button")[0];

    button.onclick = function () {
        // setData(data.speed,20)
        show(data)
    }

    document.addEventListener("keydown", keydown);


}