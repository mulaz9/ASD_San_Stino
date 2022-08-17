"use strict";
// Show menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuLine1 = document.querySelector(".line--1");
const menuLine2 = document.querySelector(".line--2");
const menuLine3 = document.querySelector(".line--3");
const headerText = document.querySelectorAll(".slide--text");
const html = document.querySelector(".html");
let menuIsOpened = false;
const showMenu = function() {
    hamburger.addEventListener("click", function() {
        if (!menuIsOpened) {
            headerText.forEach((txt)=>txt.style.opacity = 0);
            menuLine1.style.opacity = 0;
            menuLine2.style.transform = "rotate(135deg)";
            menuLine2.style.top = "40px";
            menuLine3.style.transform = "rotate(-135deg)";
            menuLine3.style.top = "40px";
            menu.classList.remove("hidden");
            menu.style.transform = "translateY(0)";
            html.style.overflowY = "hidden";
            menuIsOpened = true;
            console.log(menuIsOpened);
        } else {
            headerText.forEach((txt)=>txt.style.opacity = 1);
            menuLine1.style.opacity = 1;
            menuLine2.style.transform = "rotate(180deg)";
            menuLine2.style.top = "30px";
            menuLine3.style.transform = "rotate(-180deg)";
            menuLine3.style.top = "50px";
            menu.classList.add("hidden");
            menu.style.transform = "translateY(-150%)";
            html.style.overflowY = "auto";
            menuIsOpened = false;
        }
    });
};
showMenu();

//# sourceMappingURL=index.69335193.js.map
