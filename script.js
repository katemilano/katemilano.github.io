

$("#b1").on("click", function(){
    $("#d1").css("opacity","1");
    $("#d1").css("height","520");
    $("#d1").css("transition","1s");
    $("#b1").css("opacity","0");
});

$("#b21").on("click", function(){
    $("#d1").css("opacity","0");
    $("#d1").css("height","10");
    $("#d1").css("transition","1s");
    $("#b1").css("opacity","1");
    console.log("yes");
});

$("#b2").on("click", function(){
    $("#d2").css("opacity","1");
    $("#d2").css("height","520");
    $("#d2").css("transition","1s");
    $("#b2").css("opacity","0");
});

$("#b22").on("click", function(){
    $("#d2").css("opacity","0");
    $("#d2").css("height","10");
    $("#d2").css("transition","1s");
    $("#b2").css("opacity","1");
    console.log("yes");
});
