"use strict";

window.onload = function () {
  // 获取新鲜水果按钮
  var label_Top = document.querySelectorAll("div.label_Top > div");

  label_Top[0].onclick = function () {
    addActive(this);
  };

  label_Top[1].onclick = function () {
    addActive(this);
  }; // 获取排序列表下拉


  var label_Sort = document.querySelectorAll("div.label_Sort > div");
  var drop_down_left = document.querySelectorAll("div.drop_down_left");
  var drop_down_right = document.querySelectorAll("div.drop_down_right");

  label_Sort[0].onclick = function (event) {
    if (drop_down_right[0].style.display == "block") {
      transparent(drop_down_right[0], 0, 1);
    }

    if (drop_down_left[0].style.display == "block") {
      transparent(drop_down_left[0], 500, 0);
    } else {
      notransparent(drop_down_left[0], 0);
    }
  };

  label_Sort[1].onclick = function () {
    // 下拉图标
    if (drop_down_left[0].style.display == "block") {
      transparent(drop_down_left[0], 0, 0);
    }

    if (drop_down_right[0].style.display == "block") {
      transparent(drop_down_right[0], 500, 1);
    } else {
      notransparent(drop_down_right[0], 1);
    }
  }; //添加active属性函数


  function addActive(btn) {
    for (var i = 0; i < label_Top.length; i++) {
      label_Top[i].className = "label_Top_List";
    }

    btn.className += " active";
  } // 透明


  function transparent(drop, time, i) {
    // 下拉图标改變
    label_Sort[i].querySelectorAll("i")[0].className == "fa fa-caret-up" ? label_Sort[i].querySelectorAll("i")[0].className = "fa fa-caret-down" : label_Sort[i].querySelectorAll("i")[0].className = "fa fa-caret-up"; //透明

    drop.style.opacity = 0; //这里要等待过渡的1s，然后才消失

    setTimeout(function () {
      drop.style.display = "none";
    }, time);
  } // 不透明


  function notransparent(drop, i) {
    // 下拉图标改變
    label_Sort[i].querySelectorAll("i")[0].className == "fa fa-caret-up" ? label_Sort[i].querySelectorAll("i")[0].className = "fa fa-caret-down" : label_Sort[i].querySelectorAll("i")[0].className = "fa fa-caret-up";
    drop.style.display = "block"; //不透明

    drop.style.opacity = 1;
  }
};