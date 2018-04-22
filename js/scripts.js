document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM loaded");

    var carouselList = $("#carousel ul");

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");

        $(lastItem).after(firstItem);
        carouselList.css({
            'margin-left': 0
        });
    }

    function changeSlide() {
        carouselList.animate({
            'marginLeft': -400
        }, 500, moveFirstSlide);
    }

    setInterval(changeSlide, 3000);
});