window.onload = function () {

    // 获取salmon
    var salmon = document.querySelectorAll("div.list_item1 > div")[0];
    var salmon_content = document.querySelectorAll("div.list_item1 > div")[1];

    salmon.onclick = function () {
        unfold_stow(salmon_content)
    }



    // 获取skyblue
    var skyblue = document.querySelectorAll("div.list_item2 > div")[0];
    var skyblue_content = document.querySelectorAll("div.list_item2 > div")[1];

    skyblue.onclick = function () {
        unfold_stow(skyblue_content)
    }


    // 获取slateblue
    var slateblue = document.querySelectorAll("div.list_item3 > div")[0];
    var slateblue_content = document.querySelectorAll("div.list_item3 > div")[1];

    slateblue.onclick = function () {
        unfold_stow(slateblue_content)
    }


    var content_list = [salmon_content, skyblue_content, slateblue_content]


    // 展开收起函数
    function unfold_stow(content) {
        for (var i = 0; i < content_list.length; i++){
            if(content_list[i] != content){
                content_list[i].style.height = "0px"
            }else{
                if (content.style.height === "80px") {
                    content.style.height = "0px"
                } else {
                    content.style.height = "80px"
                }
            }
        }
    }



}