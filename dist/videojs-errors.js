!function(e,r){"use strict";var s={poster:null,errorDisplay:null,content:null,videojs:null,version:null},o=function(e){switch(s.version){case 4:s.content.innerHTML="<div>"+e+"</div>",s.content.style.display="block",s.videojs.classList.add("vjs-error");break;case 5:s.poster.style.display="block",s.videojs.classList.add("vjs-error"),s.content.innerHTML=e,s.errorDisplay.setAttribute("aria-hidden",!1),s.errorDisplay.classList.remove("vjs-hidden")}},n=function(){switch(s.version){case 4:s.content.innerHTML="<div></div>",s.content.style.display="none",s.videojs.classList.remove("vjs-error");break;case 5:s.poster.style.display="none",s.errorDisplay.classList.add("vjs-hidden"),s.errorDisplay.setAttribute("aria-hidden",!0),s.content.innerHTML="",s.videojs.classList.remove("vjs-error")}},i=function(){var e="";switch(s.version){case 4:e=s.content.querySelector("div").innerHTML;break;case 5:e=s.content.innerHTML}return e},t=function(e){return s.version=Number(r.VERSION.split(".")[0]),s.videojs=document.querySelector(".video-js"),s.poster=s.videojs.querySelector(".vjs-poster"),s.errorDisplay=s.videojs.querySelector(".vjs-error-display"),s.content=4===s.version?document.querySelector(".vjs-error-display"):s.videojs.querySelector(".vjs-modal-dialog-content"),{add:o,remove:n,get:i}};r.plugin("errors",t)}(window,window.videojs);