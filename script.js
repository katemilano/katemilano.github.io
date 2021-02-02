

$("#b1").on("click", function(){
    $("#d1").css("opacity","1");
    $("#d1").css("height","510");
    $("#d1").css("transition","1s");
    $("#b1").css("opacity","0");
});

$("#b2").on("click", function(){
    $("#d1").css("opacity","0");
    $("#d1").css("height","10");
    $("#d1").css("transition","1s");
    $("#b1").css("opacity","1");
    console.log("yes");
});

