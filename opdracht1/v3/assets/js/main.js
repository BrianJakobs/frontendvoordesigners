//reset before changing the filts
function reset() {
    for (i = 0; i < allArticles.length; ++i) {
        allArticles[i].classList.remove("hide");
        allArticles[i].classList.add("transition");
    }
}

//show all
var allArticles = document.querySelectorAll("article"), i;

document.querySelector("li #reset").addEventListener("click", function () {
    reset();
    for (i = 0; i < allArticles.length; ++i) {
        allArticles[i].classList.remove("hide");
    }
} );

//show red
var redArticles = document.querySelectorAll("article:not(.redArticle)"), i;

var red = document.querySelectorAll("article .redArticle"), i;

document.querySelector("li #red").addEventListener("click", function () {
    reset();   
    for (i = 0; i < redArticles.length; ++i) {
        redArticles[i].classList.add("hide");
    }
} );

//show orange
var orangeArticles = document.querySelectorAll("article:not(.orangeArticle)"), i;

document.querySelector("li #orange").addEventListener("click", function () {
    reset();
    for (i = 0; i < orangeArticles.length; ++i) {
        orangeArticles[i].classList.add("hide");
    }
} );

//show geel
var yellowArticles = document.querySelectorAll("article:not(.yellowArticle)"), i;

document.querySelector("li #yellow").addEventListener("click", function () {
    reset();
    for (i = 0; i < yellowArticles.length; ++i) {
        yellowArticles[i].classList.add("hide");
    }
} );

//show green
var greenArticles = document.querySelectorAll("article:not(.greenArticle)"), i;

document.querySelector("li #green").addEventListener("click", function () {
    reset();
    for (i = 0; i < greenArticles.length; ++i) {
        greenArticles[i].classList.add("hide");
    }
} );

//show blue
var blueArticles = document.querySelectorAll("article:not(.blueArticle)"), i;

document.querySelector("li #blue").addEventListener("click", function () {
    reset();
    for (i = 0; i < blueArticles.length; ++i) {
        blueArticles[i].classList.add("hide");
    }
} );

//show pink
var pinkArticles = document.querySelectorAll("article:not(.pinkArticle)"), i;

document.querySelector("li #pink").addEventListener("click", function () {
    reset();
    for (i = 0; i < pinkArticles.length; ++i) {
        pinkArticles[i].classList.add("hide");
    }
} );

//show purple
var purpleArticles = document.querySelectorAll("article:not(.purpleArticle)"), i;

document.querySelector("li #purple").addEventListener("click", function () {
    reset();
    for (i = 0; i < purpleArticles.length; ++i) {
        purpleArticles[i].classList.add("hide");
    }
} );

//show black
var blackArticles = document.querySelectorAll("article:not(.blackArticle)"), i;

document.querySelector("li #black").addEventListener("click", function () {
    reset();
    for (i = 0; i < blackArticles.length; ++i) {
        blackArticles[i].classList.add("hide");
    }
} );

//show white
var whiteArticles = document.querySelectorAll("article:not(.whiteArticle)"), i;

document.querySelector("li #white").addEventListener("click", function () {
    reset();
    for (i = 0; i < whiteArticles.length; ++i) {
        whiteArticles[i].classList.add("hide");
    }
} );