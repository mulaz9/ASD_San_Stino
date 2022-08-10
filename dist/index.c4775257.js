"use strict";
// Show menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuLine1 = document.querySelector(".line--1");
const menuLine2 = document.querySelector(".line--2");
const menuLine3 = document.querySelector(".line--3");
const headerText = document.querySelectorAll(".slide--text");
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
            menu.style.transform = "translateY(0)";
            menuIsOpened = true;
            console.log(menuIsOpened);
        } else {
            headerText.forEach((txt)=>txt.style.opacity = 1);
            menuLine1.style.opacity = 1;
            menuLine2.style.transform = "rotate(180deg)";
            menuLine2.style.top = "30px";
            menuLine3.style.transform = "rotate(-180deg)";
            menuLine3.style.top = "50px";
            menu.style.transform = "translateY(-110%)";
            menuIsOpened = false;
        }
    });
};
showMenu();
// Slider
const slider = function() {
    const slides = document.querySelectorAll(".slide");
    const dotContainer = document.querySelector(".dots");
    let curSlide = 0;
    const maxSlide = slides.length;
    // Functions
    const createDots = function() {
        slides.forEach(function(_, i) {
            dotContainer.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`);
        });
    };
    const activateDot = function(slide) {
        document.querySelectorAll(".dots__dot").forEach((dot)=>dot.classList.remove("dots__dot--active"));
        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
    };
    const goToSlide = function(slide) {
        slides.forEach((s, i)=>{
            s.style.transform = `translateX(${100 * (i - slide)}%)`;
            s.style.transition = "all 1s";
        });
    };
    // Next slide
    const nextSlide = function() {
        if (curSlide === maxSlide - 1) curSlide = 0;
        else curSlide++;
        goToSlide(curSlide);
        activateDot(curSlide);
    };
    // Prev slide
    const prevSlide = function() {
        if (curSlide === 0) curSlide = maxSlide - 1;
        else curSlide--;
        goToSlide(curSlide);
        activateDot(curSlide);
    };
    const init = function() {
        goToSlide(0);
        createDots();
        activateDot(0);
    };
    init();
    // Event Handler
    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowLeft") prevSlide();
        e.key === "ArrowRight" && nextSlide();
    });
    // Mobile touch
    const slider = document.querySelector(".slider");
    slider.addEventListener("touchend", function() {
        nextSlide();
    });
    // Dot Handler
    dotContainer.addEventListener("click", function(e) {
        if (e.target.classList.contains("dots__dot")) {
            const { slide  } = e.target.dataset;
            goToSlide(slide);
            activateDot(slide);
        }
    });
};
slider();

//# sourceMappingURL=index.c4775257.js.map
