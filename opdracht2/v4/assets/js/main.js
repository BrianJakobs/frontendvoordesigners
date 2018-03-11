var nav = document.querySelector("header nav"),
    cyprusTekst = document.querySelector("#cyprus .tekst"),
    italiëTekst = document.querySelector("#italië .tekst"),
    frankrijkTekst = document.querySelector("#frankrijk .tekst"),
    pijlLinks = document.querySelector(".fade:nth-of-type(1)"),
    pijlRechts = document.querySelector(".fade:nth-of-type(2)"),
    slider = document.querySelector(".beweeg-totaal"),
    beeld3 = document.querySelector("#beeld-3"),
    myBtn = document.querySelector("#myBtn"),
    slideViewport = 0,
    counter = 1;

function counterUp() {
    counter = counter + 1;

    if (counter >= 3) {
        counter = 3;
    }
};

function counterDown() {
    counter = counter - 1;

    if (counter < 1) {
        counter = 1;
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
        //        goRight();
        console.log(counter);
        checkViewport();
        // Linkerpijl ingedrukt
    } else if (window.event.keyCode == '37') {
        console.log("links")
        counterDown();

        //        if (slideViewport > 0) {
        //            slideViewport = 0;
        //        } else if (slideViewport < -200) {
        //            slideViewport = -200;
        //        }

        //        goLeft();
        console.log(counter);
        checkViewport();
    }
}

function checkViewport() {
    if (counter == 1) {
        console.log(counter);
        pijlLinks.classList.add("hidePijl");
        slider.classList.add("showSlide-1");
        slider.classList.remove("showSlide-2");
        slider.classList.remove("showSlide-3");
        console.log("slide 1");
    } else if (counter == 2) {
        console.log(counter);
        pijlLinks.classList.remove("hidePijl");
        pijlRechts.classList.remove("hidePijl");
        slider.classList.add("showSlide-2");
        slider.classList.remove("showSlide-1");
        slider.classList.remove("showSlide-3");
        console.log("slide 2");
    } else if (counter == 3) {
        console.log(counter);
        pijlRechts.classList.add("hidePijl");
        slider.classList.add("showSlide-3");
        slider.classList.remove("showSlide-1");
        slider.classList.remove("showSlide-2");
        console.log("slide 3");
    }
}

checkViewport();

//function goRight() {
//    "use strict";
//    checkViewport();
//    slideViewport = slideViewport + -100;
//    slider.style.transform = "translateX(" + slideViewport + "vw)";
//    console.log(slideViewport);
//}
//
//function goLeft() {
//    "use strict";
//    checkViewport();
//    slideViewport = slideViewport + 100;
//    slider.style.transform = "translateX(" + slideViewport + "vw)";
//    console.log(slideViewport);
//}

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
