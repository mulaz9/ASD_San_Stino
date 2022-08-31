"use strict";const slide2=document.querySelector(".slide--2"),slider=function(){const t=document.querySelectorAll(".slide"),e=document.querySelector(".dots");let s=0;const n=t.length,o=function(t){document.querySelectorAll(".dots__dot").forEach((t=>t.classList.remove("dots__dot--active"))),document.querySelector(`.dots__dot[data-slide="${t}"]`).classList.add("dots__dot--active")},i=function(e){t.forEach(((t,s)=>{t.style.transform=`translateX(${100*(s-e)}%)`,t.style.transition="all 1s"}))},d=function(){s===n-1?s=0:s++,slide2.classList.remove("hidden"),i(s),o(s)};i(0),t.forEach((function(t,s){e.insertAdjacentHTML("beforeend",`<button class="dots__dot" data-slide="${s}"></button>`)})),o(0),document.addEventListener("keydown",(function(t){"ArrowLeft"===t.key&&(0===s?s=n-1:s--,slide2.classList.remove("hidden"),i(s),o(s)),"ArrowRight"===t.key&&d()}));document.querySelector(".slider").addEventListener("touchmove",(function(){d()})),e.addEventListener("click",(function(t){if(t.target.classList.contains("dots__dot")){const{slide:e}=t.target.dataset;slide2.classList.remove("hidden"),i(e),o(e)}}))};slider();const news=document.querySelector("#news"),getNews=async function(){const t=await fetch(`${STRAPI_URL}/api/news-sections?sort[0]=publishedAt:desc&pagination[limit]=3&populate=foto`),e=(await t.json()).data,s=function(t,s){return`<a href="./single.html?id=${s}"><div class="news--content">\n    <img src="${STRAPI_URL}${e[t].attributes.foto.data.attributes.url}" />\n    <div class="news--text">\n      <p class="news--date">${e[t].attributes.data}<span class="blue--line">--</span>\n      </p>\n      <h3 class="news--title">${e[t].attributes.titolo}</h3>\n    </div>\n  </div></a>\n    `};for(const t of e.entries()){let e=t[1].id,n=s(t[0],e);news.insertAdjacentHTML("beforeend",n)}};getNews();const videos=document.querySelector("#videos"),getVideos=async function(){const t=await fetch(`${STRAPI_URL}/api/video-sections?sort[0]=publishedAt:desc&pagination[limit]=3&populate=video`),e=(await t.json()).data;console.log(e);for(const t of e.entries()){let n=(s=t[0],`\n  <div class="video--content">\n    <video controls>\n      <source src="${STRAPI_URL}${e[s].attributes.video.data.attributes.url}" type="video/mp4" />\n    </video>\n    <p class="video--date">\n    ${e[s].attributes.data}\n    </p>\n    <h3 class="video--title">${e[s].attributes.titolo}</h3>\n  </div>\n    `);videos.insertAdjacentHTML("beforeend",n)}var s};getVideos();
//# sourceMappingURL=index.867c5e76.js.map