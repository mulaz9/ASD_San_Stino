"use strict";
const pageContainer = document.querySelector(".page--container");
const params = new URLSearchParams(window.location.search);
console.log(params);
const id = params.get("id");
console.log(id);
const getNews = async function() {
    const response = await fetch(`http://localhost:1337/api/news-sections/${id}?populate=foto`);
    const newsJson = await response.json();
    const data = newsJson.data;
    const generateMarkup = function() {
        return /*html*/ `<div class="single--container">
    <img src="http://localhost:1337${data.attributes.foto.data.attributes.url}"/>
    <div class="single--news--text">
    <p class="single--news--date">${data.attributes.data}<span class="blue--line">--</span>
    </p>
    <h3 class="single--news--title">${data.attributes.titolo}</h3>
    </div>
    </div>
    
          <blockquote class="single--news--article">${data.attributes.articolo}</blockquote>
      `;
    };
    pageContainer.insertAdjacentHTML("afterbegin", generateMarkup());
};
getNews();

//# sourceMappingURL=single.ad8c36c9.js.map
