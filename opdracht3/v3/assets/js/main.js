var requestURL = "http://dennistel.nl/movies",
    request = new XMLHttpRequest();

//Hiermee vraag ik de api van de requestURL url op.
request.open("GET", requestURL);

request.responseType = "json";

//request.onreadystatechange = function () {
//    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
//        console.log(request.responseText);
//    }
//};

request.send();

//Load event start wanneer de response succesvol wordt gereturned.
request.onload = function () {
    //Deze variabele heeft bevat nu de content van de api.
    var jsonContent = request.response;
    writeHTML(jsonContent);
    //Hier controleer ik in de console log of het is gelukt om de content van de api te vragen
    console.log(jsonContent);
}

//In deze functie 
function writeHTML(jsonObj) {
    var allMovies = jsonObj;

    for (var i = 0; i < allMovies.length; i++) {

        var movieArticle = document.createElement("article"),
            sliderItem = document.createElement("div"),
            firstContent = document.createElement("div"),
            movieCover = document.createElement("img"),
            movieTitle = document.createElement("h2"),
            metaData = document.createElement("ul"),
            metaGenreListItem = document.createElement("li"),
            genreList = document.createElement("ul"),
            rating = document.createElement("li"),
            simplePlot = document.createElement("p"),
            moreInfo = document.createElement("div"),
            releaseDate = document.createElement("li"),
            director = document.createElement("li"),
            fullPlot = document.createElement("p"),
            actorList = document.createElement("ul"),
            moreButtonDiv = document.createElement("div"),
            moreButton = document.createElement("p"),
            moreButtonIcon = document.createElement("img");

        sliderItem.setAttribute("class", "sliderItem");
        metaData.setAttribute("class", "metaData");
        rating.setAttribute("class", "rating");
        moreInfo.setAttribute("class", "moreInfo");
        actorList.setAttribute("class", "actorList");
        firstContent.setAttribute("class", "firstContent");

        movieCover.src = allMovies[i].cover;
        movieTitle.textContent = allMovies[i].title;

        var genres = allMovies[i].genres;
        for (var g = 0; g < genres.length; g++) {
            var genreItem = document.createElement("li");
            genreItem.textContent = genres[g];
            genreList.appendChild(genreItem);
            metaGenreListItem.appendChild(genreList);
        }

        releaseDate.textContent = allMovies[i].release_date;

        director.textContent = allMovies[i]["directors"][0]["name"];

        simplePlot.textContent = allMovies[i].simple_plot;

        moreButton.textContent = ("More");
        moreButtonIcon.src = ("assets/images/arrowDown.svg");

        fullPlot.textContent = allMovies[i].plot;

        var actors = allMovies[i].actors;
        for (var a = 0; a < actors.length; a++) {

            var actorPhoto = document.createElement("img");
            actorPhoto.src = actors[a]["url_photo"];

            var actorItem = document.createElement("li"),
                actorName = document.createElement("p");
            actorName.textContent = actors[a]["actor_name"];

            actorItem.appendChild(actorPhoto);
            actorItem.appendChild(actorName);
            actorList.appendChild(actorItem);
        }

        firstContent.appendChild(movieCover);
        firstContent.appendChild(movieTitle);
        metaData.appendChild(releaseDate);
        metaData.appendChild(metaGenreListItem);
        metaData.appendChild(director);
        firstContent.appendChild(metaData);
        firstContent.appendChild(simplePlot);
        moreButtonDiv.appendChild(moreButton);
        moreButtonDiv.appendChild(moreButtonIcon);
        moreInfo.appendChild(fullPlot);
        moreInfo.appendChild(actorList);
        sliderItem.appendChild(firstContent);

        document.querySelector("main div.container").appendChild(movieArticle);
        movieArticle.appendChild(sliderItem);
        movieArticle.appendChild(moreInfo);
        movieArticle.appendChild(moreButtonDiv);
    }

    var moreInfo1 = document.querySelector("main .container article:nth-of-type(1) .moreInfo"),
        moreInfo2 = document.querySelector("main .container article:nth-of-type(2) .moreInfo"),
        moreInfo3 = document.querySelector("main .container article:nth-of-type(3) .moreInfo"),
        moreInfo4 = document.querySelector("main .container article:nth-of-type(4) .moreInfo"),
        moreInfo5 = document.querySelector("main .container article:nth-of-type(5) .moreInfo"),
        moreInfo6 = document.querySelector("main .container article:last-of-type .moreInfo");

    console.log(document.querySelector("main .container article:nth-of-type(1) .moreInfo"));

    var movie1Button = document.querySelector(".container article:nth-of-type(1) > div:last-of-type"),
        movie2Button = document.querySelector(".container article:nth-of-type(2) > div:last-of-type"),
        movie3Button = document.querySelector(".container article:nth-of-type(3) > div:last-of-type"),
        movie4Button = document.querySelector(".container article:nth-of-type(4) > div:last-of-type"),
        movie5Button = document.querySelector(".container article:nth-of-type(5) > div:last-of-type"),
        movie6Button = document.querySelector(".container article:nth-of-type(6) > div:last-of-type");

    console.log(document.querySelector("main > section > div.container article:last-of-type div:last-of-type"));

    moreInfo1.classList.add("hide");
    moreInfo2.classList.add("hide");
    moreInfo3.classList.add("hide");
    moreInfo4.classList.add("hide");
    moreInfo5.classList.add("hide");
    moreInfo6.classList.add("hide");

    document.querySelector("main section .container article > div:last-of-type").addEventListener("click", function () {
        if (document.querySelector("main section .container article:nth-of-type(1) > div:last-of-type p").innerHTML == "more") {
            console.log(document.querySelector("main section .container article:nth-of-type(1) > div:last-of-type p").innerHTML);
            document.querySelector("main section .container article:nth-of-type(1) > div:last-of-type p").innerHTML = "less";
        } else if (document.querySelector("main section .container article:nth-of-type(1) > div:last-of-type p").innerHTML == "less") {
            document.querySelector("main section .container article:nth-of-type(1) > div:last-of-type p").innerHTML = "more";
        } else {
            document.querySelector("main section .container article:nth-of-type(1) > div:last-of-type p").innerHTML = "less";
        }
    }, false);

    document.querySelector("main section .container article:nth-of-type(2) > div:last-of-type").addEventListener("click", function () {
        if (document.querySelector("main section .container article:nth-of-type(2) > div:last-of-type p").innerHTML == "more") {
            console.log(document.querySelector("main section .container article:nth-of-type(2) > div:last-of-type p").innerHTML);
            document.querySelector("main section .container article:nth-of-type(2) > div:last-of-type p").innerHTML = "less";
        } else if (document.querySelector("main section .container article:nth-of-type(2) > div:last-of-type p").innerHTML == "less") {
            document.querySelector("main section .container article:nth-of-type(2) > div:last-of-type p").innerHTML = "more";
        } else {
            document.querySelector("main section .container article:nth-of-type(2) > div:last-of-type p").innerHTML = "less";
        }
    }, false);

    document.querySelector("main section .container article:nth-of-type(3) > div:last-of-type").addEventListener("click", function () {
        if (document.querySelector("main section .container article:nth-of-type(3) > div:last-of-type p").innerHTML == "more") {
            console.log(document.querySelector("main section .container article:nth-of-type(3) > div:last-of-type p").innerHTML);
            document.querySelector("main section .container article:nth-of-type(3) > div:last-of-type p").innerHTML = "less";
        } else if (document.querySelector("main section .container article:nth-of-type(3) > div:last-of-type p").innerHTML == "less") {
            document.querySelector("main section .container article:nth-of-type(3) > div:last-of-type p").innerHTML = "more";
        } else {
            document.querySelector("main section .container article:nth-of-type(3) > div:last-of-type p").innerHTML = "less";
        }
    }, false);

    document.querySelector("main section .container article:nth-of-type(4) > div:last-of-type").addEventListener("click", function () {
        if (document.querySelector("main section .container article:nth-of-type(4) > div:last-of-type p").innerHTML == "more") {
            console.log(document.querySelector("main section .container article:nth-of-type(4) > div:last-of-type p").innerHTML);
            document.querySelector("main section .container article:nth-of-type(4) > div:last-of-type p").innerHTML = "less";
        } else if (document.querySelector("main section .container article:nth-of-type(4) > div:last-of-type p").innerHTML == "less") {
            document.querySelector("main section .container article:nth-of-type(4) > div:last-of-type p").innerHTML = "more";
        } else {
            document.querySelector("main section .container article:nth-of-type(4) > div:last-of-type p").innerHTML = "less";
        }
    }, false);

    document.querySelector("main section .container article:nth-of-type(5) > div:last-of-type").addEventListener("click", function () {
        if (document.querySelector("main section .container article:nth-of-type(5) > div:last-of-type p").innerHTML == "more") {
            console.log(document.querySelector("main section .container article:nth-of-type(5) > div:last-of-type p").innerHTML);
            document.querySelector("main section .container article:nth-of-type(5) > div:last-of-type p").innerHTML = "less";
        } else if (document.querySelector("main section .container article:nth-of-type(5) > div:last-of-type p").innerHTML == "less") {
            document.querySelector("main section .container article:nth-of-type(5) > div:last-of-type p").innerHTML = "more";
        } else {
            document.querySelector("main section .container article:nth-of-type(5) > div:last-of-type p").innerHTML = "less";
        }
    }, false);

    document.querySelector("main section .container article:nth-of-type(6) > div:last-of-type").addEventListener("click", function () {
        if (document.querySelector("main section .container article:nth-of-type(6) > div:last-of-type p").innerHTML == "more") {
            console.log(document.querySelector("main section .container article:nth-of-type(6) > div:last-of-type p").innerHTML);
            document.querySelector("main section .container article:nth-of-type(6) > div:last-of-type p").innerHTML = "less";
        } else if (document.querySelector("main section .container article:nth-of-type(6) > div:last-of-type p").innerHTML == "less") {
            document.querySelector("main section .container article:nth-of-type(6) > div:last-of-type p").innerHTML = "more";
        } else {
            document.querySelector("main section .container article:nth-of-type(6) > div:last-of-type p").innerHTML = "less";
        }
    }, false);

    movie1Button.addEventListener("click", function () {
        moreInfo1.classList.toggle("hide");
        moreInfo1.classList.toggle("show");
        document.querySelector("body footer .progress-indicator").classList.toggle("remove");
        document.querySelector("main #pijl-links").classList.toggle("remove");
        document.querySelector("main #pijl-rechts").classList.toggle("remove");
        document.querySelector("main section .container article:nth-of-type(1) > div:last-of-type img").classList.toggle("imgRotate");
    });
    movie2Button.addEventListener("click", function () {
        moreInfo2.classList.toggle("hide");
        moreInfo2.classList.toggle("show");
        document.querySelector("body footer .progress-indicator").classList.toggle("remove");
        document.querySelector("main #pijl-links").classList.toggle("remove");
        document.querySelector("main #pijl-rechts").classList.toggle("remove");
        document.querySelector("main section .container article:nth-of-type(2) > div:last-of-type img").classList.toggle("imgRotate");
    });
    movie3Button.addEventListener("click", function () {
        moreInfo3.classList.toggle("hide");
        moreInfo3.classList.toggle("show");
        document.querySelector("body footer .progress-indicator").classList.toggle("remove");
        document.querySelector("main #pijl-links").classList.toggle("remove");
        document.querySelector("main #pijl-rechts").classList.toggle("remove");
        document.querySelector("main section .container article:nth-of-type(3) > div:last-of-type img").classList.toggle("imgRotate");
    });
    movie4Button.addEventListener("click", function () {
        moreInfo4.classList.toggle("hide");
        moreInfo4.classList.toggle("show");
        document.querySelector("body footer .progress-indicator").classList.toggle("remove");
        document.querySelector("main #pijl-links").classList.toggle("remove");
        document.querySelector("main #pijl-rechts").classList.toggle("remove");
        document.querySelector("main section .container article:nth-of-type(4) > div:last-of-type img").classList.toggle("imgRotate");
    });
    movie5Button.addEventListener("click", function () {
        moreInfo5.classList.toggle("hide");
        moreInfo5.classList.toggle("show");
        document.querySelector("body footer .progress-indicator").classList.toggle("remove");
        document.querySelector("main #pijl-links").classList.toggle("remove");
        document.querySelector("main #pijl-rechts").classList.toggle("remove");
        document.querySelector("main section .container article:nth-of-type(5) > div:last-of-type img").classList.toggle("imgRotate");
    });
    movie6Button.addEventListener("click", function () {
        moreInfo6.classList.toggle("hide");
        moreInfo6.classList.toggle("show");
        document.querySelector("body footer .progress-indicator").classList.toggle("remove");
        document.querySelector("main #pijl-links").classList.toggle("remove");
        document.querySelector("main #pijl-rechts").classList.toggle("remove");
        document.querySelector("main section .container article:nth-of-type(6) > div:last-of-type img").classList.toggle("imgRotate");
    });
}

/* Slider */

var nav = document.querySelector("header nav"),
    pijlLinks = document.querySelector("main div.pijlen:nth-of-type(1)"),
    pijlRechts = document.querySelector("main div.pijlen:nth-of-type(2)"),
    slider = document.querySelector("main div:last-of-type");
slideViewport = 0,
    counter = 1,
    pointOne = document.querySelector("footer .progress-indicator ul li:nth-of-type(1)"),
    pointTwo = document.querySelector("footer .progress-indicator ul li:nth-of-type(2)"),
    pointThree = document.querySelector("footer .progress-indicator ul li:nth-of-type(3)"),
    pointFour = document.querySelector("footer .progress-indicator ul li:nth-of-type(4)"),
    pointFive = document.querySelector("footer .progress-indicator ul li:nth-of-type(5)"),
    pointSix = document.querySelector("footer .progress-indicator ul li:nth-of-type(6)");

function counterUp() {
    counter = counter + 1;

    if (counter > 6) {
        counter = 1;
    }
};

function counterDown() {
    counter = counter - 1;

    if (counter < 1) {
        counter = 6;
    }
};

pointOne.addEventListener("click", function () {
    counter = 1;
    checkViewport();
});

pointTwo.addEventListener("click", function () {
    counter = 2;
    checkViewport();
});

pointThree.addEventListener("click", function () {
    counter = 3;
    checkViewport();
});

pointFour.addEventListener("click", function () {
    counter = 4;
    checkViewport();
});

pointFive.addEventListener("click", function () {
    counter = 5;
    checkViewport();
});

pointSix.addEventListener("click", function () {
    counter = 6;
    checkViewport();
});

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
        slider.classList.remove("showSlide-4");
        slider.classList.remove("showSlide-5");
        slider.classList.remove("showSlide-6");
        console.log("slide 1");
        // Progress-indicator
        pointOne.classList.add("progress-active");
        pointTwo.classList.remove("progress-active");
        pointThree.classList.remove("progress-active");
        pointFour.classList.remove("progress-active");
        pointFive.classList.remove("progress-active");
        pointSix.classList.remove("progress-active");

    } else if (counter == 2) {
        console.log(counter);
        slider.classList.remove("showSlide-1");
        slider.classList.add("showSlide-2");
        slider.classList.remove("showSlide-3");
        slider.classList.remove("showSlide-4");
        slider.classList.remove("showSlide-5");
        slider.classList.remove("showSlide-6");
        console.log("slide 2");
        // Progress-indicator
        pointOne.classList.remove("progress-active");
        pointTwo.classList.add("progress-active");
        pointThree.classList.remove("progress-active");
        pointFour.classList.remove("progress-active");
        pointFive.classList.remove("progress-active");
        pointSix.classList.remove("progress-active");

    } else if (counter == 3) {
        console.log(counter);
        slider.classList.remove("showSlide-1");
        slider.classList.remove("showSlide-2");
        slider.classList.add("showSlide-3");
        slider.classList.remove("showSlide-4");
        slider.classList.remove("showSlide-5");
        slider.classList.remove("showSlide-6");
        console.log("slide 3");
        // Progress-indicator
        pointOne.classList.remove("progress-active");
        pointTwo.classList.remove("progress-active");
        pointThree.classList.add("progress-active");
        pointFour.classList.remove("progress-active");
        pointFive.classList.remove("progress-active");
        pointSix.classList.remove("progress-active");

    } else if (counter == 4) {
        console.log(counter);
        slider.classList.remove("showSlide-1");
        slider.classList.remove("showSlide-2");
        slider.classList.remove("showSlide-3");
        slider.classList.add("showSlide-4");
        slider.classList.remove("showSlide-5");
        slider.classList.remove("showSlide-6");
        console.log("slide 4");
        // Progress-indicator
        pointOne.classList.remove("progress-active");
        pointTwo.classList.remove("progress-active");
        pointThree.classList.remove("progress-active");
        pointFour.classList.add("progress-active");
        pointFive.classList.remove("progress-active");
        pointSix.classList.remove("progress-active");

    } else if (counter == 5) {
        console.log(counter);
        slider.classList.remove("showSlide-1");
        slider.classList.remove("showSlide-2");
        slider.classList.remove("showSlide-3");
        slider.classList.remove("showSlide-4");
        slider.classList.add("showSlide-5");
        slider.classList.remove("showSlide-6");
        console.log("slide 5");
        // Progress-indicator
        pointOne.classList.remove("progress-active");
        pointTwo.classList.remove("progress-active");
        pointThree.classList.remove("progress-active");
        pointFour.classList.remove("progress-active");
        pointFive.classList.add("progress-active");
        pointSix.classList.remove("progress-active");

    } else if (counter == 6) {
        console.log(counter);
        slider.classList.remove("showSlide-1");
        slider.classList.remove("showSlide-2");
        slider.classList.remove("showSlide-3");
        slider.classList.remove("showSlide-4");
        slider.classList.remove("showSlide-5");
        slider.classList.add("showSlide-6");
        console.log("slide 6");
        // Progress-indicator
        pointOne.classList.remove("progress-active");
        pointTwo.classList.remove("progress-active");
        pointThree.classList.remove("progress-active");
        pointFour.classList.remove("progress-active");
        pointFive.classList.remove("progress-active");
        pointSix.classList.add("progress-active");
    }
}

checkViewport();

pijlLinks.addEventListener("click", checkViewport);
pijlRechts.addEventListener("click", checkViewport);
window.addEventListener("keydown", arrowsPressed);