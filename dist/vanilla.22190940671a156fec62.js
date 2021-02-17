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
const data_namespaceObject = JSON.parse("{\"links\":[[\"Webpack\",\"index.html\"],[\"Vanilla JS\",\"aloha-vanilla.html\"],[\"React\",\"aloha-react.html\"],[\"Vue.js\",\"aloha-vue.html\"],[\"TypeScript\",\"aloha-ts.html\"],[\"TODO\",\"to-do.html\"]]}");
;// CONCATENATED MODULE: ./src/img/js-logo.png
/* harmony default export */ const js_logo = (__webpack_require__.p + "assets/js-logo.png");
;// CONCATENATED MODULE: ./src/Aloha.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Aloha = /*#__PURE__*/function () {
  function Aloha(name) {
    _classCallCheck(this, Aloha);

    this.name = name;
  }

  _createClass(Aloha, [{
    key: "greet",
    value: function greet() {
      return "Aloha, Webpack con ".concat(this.name, " !!");
    }
  }]);

  return Aloha;
}();
;// CONCATENATED MODULE: ./src/aloha_vanilla.js
 // o
// import "./styles.css";





console.log("Aloha MuNDo desde Donostia con VanillaJS desde Webpack!!");
/* ****************************************** */

var d = document,
    app = d.getElementById("app"),
    h1 = d.createElement("h1"),
    p = d.createElement("p"),
    img = d.createElement("img"),
    nav = d.createElement("nav"),
    aloha = new Aloha("VanillaJS");
var menu = "";
data_namespaceObject.links.forEach(function (link) {
  return menu += "<a href=\"".concat(link[1], "\">").concat(link[0], "</a>");
});
h1.textContent = "Webpack + VanillaJS";
p.innerHTML = aloha.greet() + "<br>" + "Creando la primera aplicación con Webpack";
img.src = js_logo;
nav.classList.add("Menu");
nav.innerHTML = menu;
app.appendChild(nav);
app.appendChild(h1);
app.appendChild(p);
app.appendChild(img);
/******/ })()
;