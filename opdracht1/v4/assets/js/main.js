var allArticles = document.querySelectorAll("article"),
    i,
    notSelected = document.querySelectorAll("article:not(.show)"),
    i,
    articlesShown = document.querySelectorAll("article .show"),
    i;

function allesUit() {
    "use strict";
    return Array.from(document.querySelectorAll("input[type='checkbox']")).every(x => !x.checked);
}

function hideNotSelected() {
    for (i = 0; i < notSelected.length; ++i) {
        notSelected[i].classList.add("hide");
    }
}

//show red
var redArticles = document.querySelectorAll(".redArticle"),
    i;

document.querySelector("li #red").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < redArticles.length; ++i) {
        redArticles[i].classList.toggle("show");
        console.log("rood is geselecteerd");
    }
    hideNotSelected();
    console.log("alles dat niet show heeft krijgt nu hide");
    if (allesUit()) {
        Array.from(document.querySelectorAll("article")).forEach(article => {
            if (article.classList.contains("hide")) {
                article.classList.remove("hide");
            }
        });
    }
    console.log(allesUit());
});

//show orange
var orangeArticles = document.querySelectorAll(".orangeArticle"),
    i;

document.querySelector("li #orange").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < orangeArticles.length; ++i) {
        orangeArticles[i].classList.toggle("show");
        console.log("oranje is geselecteerd");
    }
    hideNotSelected();
    if (allesUit()) {
        Array.from(document.querySelectorAll("article")).forEach(article => {
            if (article.classList.contains("hide")) {
                article.classList.remove("hide");
            }
        });
    }
});

//show yellow
var yellowArticles = document.querySelectorAll(".yellowArticle"),
    i;

document.querySelector("li #yellow").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < yellowArticles.length; ++i) {
        yellowArticles[i].classList.toggle("show");
        console.log("geel is geselecteerd");
    }
    hideNotSelected();
    if (allesUit()) {
        Array.from(document.querySelectorAll("article")).forEach(article => {
            if (article.classList.contains("hide")) {
                article.classList.remove("hide");
            }
        });
    }
});

//show green
var greenArticles = document.querySelectorAll(".greenArticle"),
    i;

document.querySelector("li #green").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < greenArticles.length; ++i) {
        greenArticles[i].classList.toggle("show");
        console.log("groen is geselecteerd");
    }
    hideNotSelected();
    if (allesUit()) {
        Array.from(document.querySelectorAll("article")).forEach(article => {
            if (article.classList.contains("hide")) {
                article.classList.remove("hide");
            }
        });
    }
});

//show blue
var blueArticles = document.querySelectorAll(".blueArticle"),
    i;

document.querySelector("li #blue").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < blueArticles.length; ++i) {
        blueArticles[i].classList.toggle("show");
        console.log("blauw is geselecteerd");
    }
    hideNotSelected();
    console.log("alles dat niet show heeft krijgt nu hide");
    if (allesUit()) {
        Array.from(document.querySelectorAll("article")).forEach(article => {
            if (article.classList.contains("hide")) {
                article.classList.remove("hide");
            }
        });
    }
});

//show pink
var pinkArticles = document.querySelectorAll(".pinkArticle"),
    i;

document.querySelector("li #pink").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < pinkArticles.length; ++i) {
        pinkArticles[i].classList.toggle("show");
        console.log("roze is geselecteerd");
    }
    hideNotSelected();
    console.log("alles dat niet show heeft krijgt nu hide");
    if (allesUit()) {
        Array.from(document.querySelectorAll("article")).forEach(article => {
            if (article.classList.contains("hide")) {
                article.classList.remove("hide");
            }
        });
    }
});

//show purple
var purpleArticles = document.querySelectorAll(".purpleArticle"),
    i;

document.querySelector("li #purple").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < purpleArticles.length; ++i) {
        purpleArticles[i].classList.toggle("show");
        console.log("paars is geselecteerd");
    }
    hideNotSelected();
    console.log("alles dat niet show heeft krijgt nu hide");
    if (allesUit()) {
        Array.from(document.querySelectorAll("article")).forEach(article => {
            if (article.classList.contains("hide")) {
                article.classList.remove("hide");
            }
        });
    }
});

//show brown
var brownArticles = document.querySelectorAll(".brownArticle"),
    i;

document.querySelector("li #brown").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < brownArticles.length; ++i) {
        brownArticles[i].classList.toggle("show");
        console.log("bruin is geselecteerd");
    }
    hideNotSelected();
    console.log("alles dat niet show heeft krijgt nu hide");
    if (allesUit()) {
        Array.from(document.querySelectorAll("article")).forEach(article => {
            if (article.classList.contains("hide")) {
                article.classList.remove("hide");
            }
        });
    }
});

//show black
var blackArticles = document.querySelectorAll(".blackArticle"),
    i;

document.querySelector("li #black").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < blackArticles.length; ++i) {
        blackArticles[i].classList.toggle("show");
        console.log("zwart is geselecteerd");
    }
    hideNotSelected();
    console.log("alles dat niet show heeft krijgt nu hide");
    if (allesUit()) {
        Array.from(document.querySelectorAll("article")).forEach(article => {
            if (article.classList.contains("hide")) {
                article.classList.remove("hide");
            }
        });
    }
});

//show white
var whiteArticles = document.querySelectorAll(".whiteArticle"),
    i;

document.querySelector("li #white").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < whiteArticles.length; ++i) {
        whiteArticles[i].classList.toggle("show");
        console.log("wit is geselecteerd");
    }
    hideNotSelected();
    console.log("alles dat niet show heeft krijgt nu hide");
    if (allesUit()) {
        Array.from(document.querySelectorAll("article")).forEach(article => {
            if (article.classList.contains("hide")) {
                article.classList.remove("hide");
            }
        });
    }
});