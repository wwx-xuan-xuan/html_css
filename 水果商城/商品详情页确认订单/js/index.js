$(function(){
    if($(".payment").attr("display") === "block"){

    }

    $(".bottom_buy").click(function(){
        $(".payment").css("display","block")
        $(".meng").css("display","block")
    })

    $(".payment").click(function(){
        console.log("ASd")
    })


    $(".meng").click(function(){
        $(".payment").css("display","none")
        $(".meng").css("display","none")

    })
}) 