/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

;// CONCATENATED MODULE: ./src/data.json
const data_namespaceObject = JSON.parse("{\"name\":\"Webpack\",\"links\":[[\"Webpack\",\"index.html\"],[\"Vanilla JS\",\"aloha-vanilla.html\"],[\"React\",\"aloha-react.html\"],[\"Vue.js\",\"aloha-vue.html\"],[\"TypeScript\",\"aloha-ts.html\"],[\"TODO\",\"to-do.html\"]]}");
;// CONCATENATED MODULE: ./src/img/typescript-logo.svg
/* harmony default export */ const typescript_logo = (__webpack_require__.p + "assets/typescript-logo.svg");
;// CONCATENATED MODULE: ./src/Aloha.ts
var Aloha = /** @class */ (function () {
    function Aloha(name) {
        this.name = name;
    }
    Aloha.prototype.greet = function () {
        return "Aloha, Webpack con " + this.name;
    };
    return Aloha;
}());


;// CONCATENATED MODULE: ./src/aloha_ts.js





console.log("Aloha MuNDo desde Donostia con TypeScript desde Webpack!!");
/* ****************************************** */

var d = document,
    app = d.getElementById("app"),
    h1 = d.createElement("h1"),
    p = d.createElement("p"),
    img = d.createElement("img"),
    nav = d.createElement("nav"),
    aloha = new Aloha("TypeScript");
var menu = "";
data_namespaceObject.links.forEach(function (link) {
  return menu += "<a href=\"".concat(link[1], "\">").concat(link[0], "</a>");
});
h1.textContent = "Webpack + TypeScript";
p.innerHTML = aloha.greet() + "<br>" + "Creando la primera aplicación con Webpack";
img.src = typescript_logo;
nav.classList.add("Menu");
nav.innerHTML = menu;
app.appendChild(nav);
app.appendChild(h1);
app.appendChild(p);
app.appendChild(img);
console.log(data_namespaceObject);
/******/ })()
;