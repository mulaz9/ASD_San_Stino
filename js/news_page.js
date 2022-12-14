"use strict";

// Rendering News
const news = document.querySelector(".news");

const getNews = async function () {
  const response = await fetch(
    `${STRAPI_URL}/api/news-sections?sort[0]=publishedAt:desc&populate=foto`
  );
  const newsJson = await response.json();
  const data = newsJson.data;
  // console.log([...data.entries()]);
  const generateMarkup = function (i, id) {
    return /*html*/ `<a href="./single_news.html?id=${id}"><div class="news--content">
    <img src="${data[i].attributes.foto.data.attributes.url}" />
    <div class="news--text">
      <p class="news--date">${data[i].attributes.data}<span class="blue--line">--</span>
      </p>
      <h3 class="news--title">${data[i].attributes.titolo}</h3>
    </div>
  </div></a>
    `;
  };
  for (const item of data.entries()) {
    let id = item[1].id;
    let markup = generateMarkup(item[0], id);
    news.insertAdjacentHTML("beforeend", markup);
  }
};

getNews();

// Rendering Videos
const videos = document.querySelector(".videos");

const getVideos = async function () {
  // Ottenere dati API
  const response = await fetch(
    `${STRAPI_URL}/api/video-sections?sort[0]=publishedAt:desc&populate=video`
  );
  const newsJson = await response.json();
  const data = newsJson.data;
  console.log(data);
  // Creare html
  const generateMarkup = function (i) {
    return /*html*/ `
  <div class="video--content">
    <video controls>
      <source src="${data[i].attributes.video.data.attributes.url}" type="video/mp4" />
    </video>
    <p class="video--date">
    ${data[i].attributes.data}<span class="blue--line">--</span>
    </p>
    <h3 class="video--title">${data[i].attributes.titolo}</h3>
  </div>
    `;
  };
  for (const item of data.entries()) {
    let markup = generateMarkup(item[0]);
    videos.insertAdjacentHTML("beforeend", markup);
  }
};

getVideos();
