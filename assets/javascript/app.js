$("#about").hide();
$("#portfolio").hide();
$("#contact").hide();
$("#pdf").hide();

function hide() {
    $("#welcome").hide();
    $("#about").hide();
    $("#portfolio").hide();
    $("#contact").hide();
    $("#pdf").hide();
}

function countdown() {    
    $("#timer").html(sec);
    intervalId = setInterval(count, 1000);    
}

function count() {
    console.log(sec);    
    sec--;
    $("#timer").text(sec);
    if (sec === 0) {
        clearInterval(intervalId);
        $("#welcome").hide();
    }
}

$("#aboutbtn").on("click", function(event) {
    hide();
    $("#about").show();
});

$("#portbtn").on("click", function(event) {
    hide();
    $("#portfolio").show();
});

$("#conbtn").on("click", function(event) {
    hide();
    $("#contact").show();
});

$("#resbtn").on("click", function(event) {
    hide();
    $("#pdf").show();
});

$(document).ready(function(){
    sec = 10;    
    countdown();
});