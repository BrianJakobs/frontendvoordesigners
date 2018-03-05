var sliderFotos = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#pijl-links"),
    arrowRight = document.querySelector("#pijl-rechts"),
    huidig = 0,
    nav = document.querySelector("header nav"),
    eatTekst = document.querySelector("#eat .tekst"),
    sleepTekst = document.querySelector("#sleep .tekst"),
    workTekst = document.querySelector("#work .tekst"),
    myBtn = document.querySelector("main > a > #myBtn");

// Haal alle foto's weg
function reset() {
    "use strict";
    for (var i = 0; i < sliderFotos.length; i++) {
        sliderFotos[i].classList.add("hide");
        sliderFotos[i].classList.remove("show");
    }
}

// Standaard foto
function startSlide() {
    "use strict";
    reset();
    sliderFotos[0].classList.toggle("show");
}

// Vorige foto
function slideLinks() {
    "use strict";
    reset();
    sliderFotos[huidig - 1].classList.toggle("show");
    huidig--;
}

// Volgende foto
function slideRechts() {
    "use strict";
    reset();
    sliderFotos[huidig + 1].classList.toggle("show");
    huidig++;
}

function motionLeft() {
    if (huidig === 0) {
        huidig = sliderFotos.length;
    }
    slideLinks();
}

function motionRechts() {
    if (huidig === sliderFotos.length - 1) {
        huidig = -1;
    }
    slideRechts();
}

// linker pijl geklikt
arrowLeft.addEventListener("click", motionLeft);

// Rechter pijl geklikt
arrowRight.addEventListener("click", motionRechts);

startSlide();

document.onkeydown = function (i) {
    "use strict";
    i = i || window.event;
    // Linker pijl ingedrukt
    if (i.keyCode == '37') {
        motionLeft()
        // Rechter pijl ingedrukt
    } else if (i.keyCode == '39') {
        motionRechts()
    }
}

document.addEventListener("scroll", function () {
    "use strict";
    if (scrollY <= 250) {
        nav.classList.remove("showNav");
        myBtn.classList.remove("showBtn");
    } else if (scrollY >= 1) {
        nav.classList.add("showNav");
        myBtn.classList.add("showBtn");
    }
});

document.addEventListener("scroll", function () {
    "use strict";
    if (scrollY <= 700) {
        eatTekst.classList.add("showTekst");
    } else {
        console.log("scroll naar beneden");
    }
});

document.addEventListener("scroll", function () {
    "use strict";
    if (scrollY <= 900) {
        sleepTekst.classList.add("showTekst");
    } else {
        console.log("scroll naar beneden");
    }
});

document.addEventListener("scroll", function () {
    "use strict";
    if (scrollY <= 1200) {
        workTekst.classList.add("showTekst");
    } else {
        console.log("scroll naar beneden");
    }
});

myBtn.addEventListener("click", function () {
    "use strict";
    document.body.scrollY(0);
    console.log(scrollY);
});
