"use strict";
// Slider
const slide2 = document.querySelector(".slide--2");
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
        slide2.classList.remove("hidden");
        goToSlide(curSlide);
        activateDot(curSlide);
    };
    // Prev slide
    const prevSlide = function() {
        if (curSlide === 0) curSlide = maxSlide - 1;
        else curSlide--;
        slide2.classList.remove("hidden");
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
    slider.addEventListener("touchmove", function() {
        nextSlide();
    });
    // Dot Handler
    dotContainer.addEventListener("click", function(e) {
        if (e.target.classList.contains("dots__dot")) {
            const { slide  } = e.target.dataset;
            slide2.classList.remove("hidden");
            goToSlide(slide);
            activateDot(slide);
        }
    });
};
slider();
// Rendering News
const news = document.querySelector("#news");
const getNews = async function() {
    const response = await fetch("https://acd-san-stino.herokuapp.com/api/news-sections?sort[0]=publishedAt:desc&pagination[limit]=3&populate=foto");
    const newsJson = await response.json();
    const data = newsJson.data;
    // console.log([...data.entries()]);
    const generateMarkup = function(i, id) {
        return /*html*/ `<a href="./single.html?id=${id}"><div class="news--content">
    <img src="https://acd-san-stino.herokuapp.com${data[i].attributes.foto.data.attributes.url}" />
    <div class="news--text">
      <p class="news--date">${data[i].attributes.data}<span class="blue--line">--</span>
      </p>
      <h3 class="news--title">${data[i].attributes.titolo}</h3>
    </div>
  </div></a>
    `;
    };
    for (const item of data.entries()){
        let id = item[1].id;
        let markup = generateMarkup(item[0], id);
        news.insertAdjacentHTML("beforeend", markup);
    }
};
getNews();
// Rendering Videos
const videos = document.querySelector("#videos");
const getVideos = async function() {
    // Ottenere dati API
    const response = await fetch("https://acd-san-stino.herokuapp.com/api/video-sections?sort[0]=publishedAt:desc&pagination[limit]=3&populate=video");
    const newsJson = await response.json();
    const data = newsJson.data;
    console.log(data);
    // Creare html
    const generateMarkup = function(i) {
        return /*html*/ `
  <div class="video--content">
    <video controls>
      <source src="https://acd-san-stino.herokuapp.com${data[i].attributes.video.data.attributes.url}" type="video/mp4" />
    </video>
    <p class="video--date">
    ${data[i].attributes.data}
    </p>
    <h3 class="video--title">${data[i].attributes.titolo}</h3>
  </div>
    `;
    };
    for (const item of data.entries()){
        let markup = generateMarkup(item[0]);
        videos.insertAdjacentHTML("beforeend", markup);
    }
};
getVideos();

//# sourceMappingURL=index.c4775257.js.map
