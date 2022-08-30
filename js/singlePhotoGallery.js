"use strict";

// Rendering single photo
const singlePhotoContainer = document.querySelector(
  ".single--photo--container"
);
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const getPhoto = async function () {
  const response = await fetch(
    `${STRAPI_URL}/api/galleries/${id}?populate=foto`
  );
  const newsJson = await response.json();
  const data = newsJson.data;

  const generateMarkup = function () {
    return /*html*/ `<div class="single--photo--container">
    <img src="${STRAPI_URL}${data.attributes.foto.data.attributes.url}"/>
    <h3 class="single--news--title">${data.attributes.titolo}</h3>
    </div>
      `;
  };

  singlePhotoContainer.insertAdjacentHTML("afterbegin", generateMarkup());
};

// getPhoto();
