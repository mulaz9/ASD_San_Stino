"use strict";const galleryContainer=document.querySelector(".gallery--container"),getPhotos=async function(){const t=await fetch("https://acd-san-stino.herokuapp.com/api/galleries?populate=foto&sort[0]=titolo"),o=(await t.json()).data,e=function(t,e){return`<a href="./test.html?id=${e}">\n    <div class="photo">\n      <img src="https://acd-san-stino.herokuapp.com${o[t].attributes.foto.data.attributes.url}" />\n      <p>${o[t].attributes.titolo}</p>\n    </div></a>\n      `};for(const t of o.entries()){let o=t[1].id,a=e(t[0],o);galleryContainer.insertAdjacentHTML("beforeend",a)}};getPhotos();
//# sourceMappingURL=gallery.0f22d27d.js.map
