var js = document.getElementsByTagName('script')[3];
js.parentElement.removeChild(js);
document.removeEventListener('load', null);
var njs = document.createElement('script'); njs.type = js.type; njs.src = js.src;
document.head.appendChild(njs);