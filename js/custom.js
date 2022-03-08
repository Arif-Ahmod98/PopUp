"use strict";

// assigning variable
const button = document.getElementById('btn');
const crossBtn = document.getElementById('cross-btn');
const popUp_div = document.getElementById('overlay-main');

//adding popUp 
button.addEventListener("click", function () {

    popUp_div.classList.add("open-button-click");

});

// removing popUp
crossBtn.addEventListener("click", function () {

    popUp_div.classList.remove("open-button-click");

});