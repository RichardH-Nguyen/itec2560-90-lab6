$(function (){

    $("#add").click(function () {
        var newItem = $("#textbox").val();


        //var item = $("#list").createElement("li");
        $("#list").append($('<li class="notDone">').text(newItem));

        console.log()
    });

    $(".notDone").click(function(){
        $(this).toggleClass("done");
    });

});