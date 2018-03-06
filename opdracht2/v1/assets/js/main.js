var sliderFotos = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#pijl-links"),
    arrowRight = document.querySelector("#pijl-rechts"),
    huidig = 0,
    nav = document.querySelector("header nav"),
    eatTekst = document.querySelector("#eat .tekst"),
    sleepTekst = document.querySelector("#sleep .tekst"),
    workTekst = document.querySelector("#work .tekst");


//Uitleg van het toegepaste principe voor de foto slider: https://www.youtube.com/watch?v=7ZO2RTMNSAY als bron gebruikt.

// Haal alle foto's weg
function reset() {
    "use strict";
    for (var i = 0; i < sliderFotos.length; i++) {
        sliderFotos[i].classList.add("hide");
        sliderFotos[i].classList.remove("show");
    }
}

// Standaard foto
function Beginfoto() {
    "use strict";
    reset();
    //sliderFotos is een array, dus 0 is het eerste item
    sliderFotos[0].classList.toggle("show");
}

// Vorige foto
function slideLinks() {
    "use strict";
    reset();
    //het vorige item in de array wordt zichtbaar gemaakt en dat wordt het nieuwe huidige item.
    sliderFotos[huidig - 1].classList.toggle("show");
    huidig--;
}

function motionLeft() {
    if (huidig === 0) {
        //als het huidige item 0 is, moet de laatste afbeelding in de array weer getoont worden zodat hij kan blijven draaien.
        huidig = sliderFotos.length;
    }
    slideLinks();
}

// Volgende foto
function slideRechts() {
    "use strict";
    reset();
    //het volgende item in de array wordt zichtbaar gemaakt en dat wordt het nieuwe huidige item. 
    sliderFotos[huidig + 1].classList.toggle("show");
    huidig++;
}

function motionRechts() {
    //Dit is het laatste item in de array. Deze heeft dan een 'huidig' van 2, die moet dan dus weer 0 worden. 
    if (huidig === sliderFotos.length - 1) {
        //Deze wordt op -1 gezet zodat als er weer 1 bij komt, door de functie slideRechts, dat het 
        huidig = -1;
    }
    slideRechts();
}

// linker pijl geklikt
arrowLeft.addEventListener("click", motionLeft);

// Rechter pijl geklikt
arrowRight.addEventListener("click", motionRechts);

Beginfoto();

document.onkeydown = function (i) {
    "use strict";
    // Linker pijl ingedrukt
    if (window.event.keyCode == '37') {
        motionLeft()
        // Rechter pijl ingedrukt
    } else if (window.event.keyCode == '39') {
        motionRechts()
    }
}

document.addEventListener("scroll", function () {
    "use strict";
    if (scrollY <= 250) {
        nav.classList.remove("showNav");
    } else if (scrollY >= 1) {
        nav.classList.add("showNav");
    }
});
