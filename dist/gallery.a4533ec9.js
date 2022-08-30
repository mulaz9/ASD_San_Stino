"use strict";
const galleryContainer = document.querySelector(".gallery--container");
const getPhotos = async function() {
    const response = await fetch(`${STRAPI_URL}/api/galleries?populate=foto&sort[0]=titolo`);
    const newsJson = await response.json();
    const data = newsJson.data;
    const generateMarkup = function(i, id) {
        return /*html*/ `<a href="./test.html?id=${id}">
    <div class="photo">
      <img src="${STRAPI_URL}${data[i].attributes.foto.data.attributes.url}" />
      <p>${data[i].attributes.titolo}</p>
    </div></a>
      `;
    };
    for (const item of data.entries()){
        let id = item[1].id;
        let markup = generateMarkup(item[0], id);
        galleryContainer.insertAdjacentHTML("beforeend", markup);
    }
};
getPhotos();

//# sourceMappingURL=gallery.a4533ec9.js.map
