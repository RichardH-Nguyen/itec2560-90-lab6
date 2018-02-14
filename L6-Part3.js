/**
 * Created by su7163if on 2/13/2018.
 */
$(function () {
    $("span").css({
        "font-weight" : "bold"
    });

    $("h2").click(function(){
        $(this).css({
            "background-color" : "green"
        })
    });

    $("#h1_blue").click(function(){
        $("h1").css({
            "color" : "blue"
        })
    });

    $("#remove_not_important").click(function(){
        $(".not_important").hide();
    });

    $("li").click(function () {
        $(this).slideUp(1000)
    })
});