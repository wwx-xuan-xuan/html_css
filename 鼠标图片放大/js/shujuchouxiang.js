var box1
var box_img

let data = {
    mouse_event_pageX: 0,
    mouse_event_pageY: 0,

}

function setData(newData) {

    for (let key in newData) { 
        data[key] = newData[key]
    }

    Mover()
}


function Mover() {

    let mouse_event_pageX = data.mouse_event_pageX;
    let mouse_event_pageY = data.mouse_event_pageY;

    // let box1_left = data.box1_left;
    // let box1_top = data.box1_top;

    // let box1_backgroundPositionX = data.box1_backgroundPositionX;
    // let box1_backgroundPositionY = data.box1_backgroundPositionY;
    console.log(mouse_event_pageX)
    box1.style.left = mouse_event_pageX + "px";
    box1.style.top = mouse_event_pageY -100+ "px";

    box1.style.backgroundPositionX = -mouse_event_pageX * 2 - 200 + "px"
    box1.style.backgroundPositionY = -mouse_event_pageY * 2 - 300 + "px"



}


window.onload = function () {


    box1 = document.getElementById("box1");

    var body = document.getElementsByTagName("body");
    // body[0].onmousemove

    box_img = document.querySelectorAll("div.box > img")[0]

    box_img.onmousemove = function (event) {


        setData({
            mouse_event_pageX: event.pageX + 10,
            mouse_event_pageY: event.pageY - 10
        })

    }


}