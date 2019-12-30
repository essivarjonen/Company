//kutsutaan painiketta html tiedostosta
var upbutton = document.getElementById("upBtn");

//Kun sivua skrollataan alaspäin 20px verran painike ilmestyy
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upbutton.style.display = "block";
    } else {
        upbutton.style.display ="none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}