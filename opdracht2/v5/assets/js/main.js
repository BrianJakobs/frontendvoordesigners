var nav = document.querySelector("header nav"),
    cyprusTekst = document.querySelector("#cyprus .tekst"),
    italiëTekst = document.querySelector("#italië .tekst"),
    frankrijkTekst = document.querySelector("#frankrijk .tekst"),
    pijlLinks = document.querySelector(".fade:nth-of-type(1)"),
    pijlRechts = document.querySelector(".fade:nth-of-type(2)"),
    slider = document.querySelector(".beweeg-totaal"),
    myBtn = document.querySelector("#myBtn"),
    slideViewport = 0,
    counter = 1;

function counterUp() {
    counter = counter + 1;

    if (counter > 3) {
        counter = 1;
    }
};

function counterDown() {
    counter = counter - 1;

    if (counter < 1) {
        counter = 3;
    }
};

pijlRechts.addEventListener("click", counterUp);
pijlLinks.addEventListener("click", counterDown);

function arrowsPressed() {
    "use strict";
    // Rechterpijl ingedrukt
    if (window.event.keyCode == '39') {
        console.log("rechts")
        counterUp();
        console.log(counter);
        checkViewport();
        // Linkerpijl ingedrukt
    } else if (window.event.keyCode == '37') {
        console.log("links")
        counterDown();
        console.log(counter);
        checkViewport();
    }
}

function checkViewport() {
    if (counter == 1) {
        console.log(counter);
        slider.classList.add("showSlide-1");
        slider.classList.remove("showSlide-2");
        slider.classList.remove("showSlide-3");
        console.log("slide 1");
    } else if (counter == 2) {
        console.log(counter);
        slider.classList.add("showSlide-2");
        slider.classList.remove("showSlide-1");
        slider.classList.remove("showSlide-3");
        console.log("slide 2");
    } else if (counter == 3) {
        console.log(counter);
        slider.classList.add("showSlide-3");
        slider.classList.remove("showSlide-1");
        slider.classList.remove("showSlide-2");
        console.log("slide 3");
    }
}

checkViewport();

pijlLinks.addEventListener("click", checkViewport);
pijlRechts.addEventListener("click", checkViewport);
window.addEventListener("keydown", arrowsPressed);

//Scroll Javascript
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
        cyprusTekst.classList.add("showTekst");
        italiëTekst.classList.add("showTekst");
        frankrijkTekst.classList.add("showTekst");
    } else {
        console.log("scroll naar beneden");
    }
});

myBtn.addEventListener("click", function () {
    "use strict";
    document.body.scrollY(0);
    console.log(scrollY);
});
