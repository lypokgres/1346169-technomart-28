var cartLink = document.querySelectorAll(".product-buy-button");
var cartPopup = document.querySelector(".popup-cart");
var cartClose = document.querySelector(".cart-button-close");
var cartContinue = document.querySelector(".button-continue");

cartLink.forEach((element) => {
    element.addEventListener("click", function (evt) {
        evt.preventDefault();
        cartPopup.classList.add("popup-show");
    });
});

cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("popup-show");
});

cartContinue.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (cartPopup.classList.contains("popup-show")) {
            cartPopup.classList.remove("popup-show");
        }
    }
});

var feedbackLink = document.querySelector(".contacts-button");
var feedbackPopup = document.querySelector(".popup-feedback");
var feedbackClose = document.querySelector(".feedback-button-close");
var feedbackForm = document.querySelector(".feedback-form");
var feedbackName = document.querySelector("[name=name]");
var feedbackEmail = document.querySelector("[name=email]");
var feedbackMessage = document.querySelector("[name=message]");

feedbackLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("popup-show");
    feedbackName.focus();
    if (feedbackName.value) {
        feedbackEmail.focus();
    }
    if (feedbackEmail.value) {
        feedbackMessage.focus();
    }
});

feedbackClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("popup-show");
    feedbackPopup.classList.remove("popup-error");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (feedbackPopup.classList.contains("popup-show")) {
            evt.preventDefault();
            feedbackPopup.classList.remove("popup-show")
            feedbackPopup.classList.remove("popup-error");
        }
    }
});


var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".popup-map");
var mapClose = document.querySelector(".map-button-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("popup-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("popup-show")) {
            mapPopup.classList.remove("popup-show");
        }
    }
});