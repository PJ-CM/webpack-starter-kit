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
;// CONCATENATED MODULE: ./src/img/webpack-logo.svg
/* harmony default export */ const webpack_logo = (__webpack_require__.p + "assets/webpack-logo.svg");
;// CONCATENATED MODULE: ./src/index.js
 // o
// import "./styles.css";




console.log("Aloha MuNDo desde Donostia sin webpack.config.js!!");
var arr = [1, 2, 4];

var codeES6 = function codeES6() {
  var _console;

  return (_console = console).log.apply(_console, arr);
};

codeES6(); // Imprimiendo el objeto completo y el valor de una de sus claves

console.log(data_namespaceObject, data_namespaceObject.name);
/* ****************************************** */

var d = document,
    app = d.getElementById("app"),
    h1 = d.createElement("h1"),
    p = d.createElement("p"),
    img = d.createElement("img"),
    nav = d.createElement("nav");
var menu = "";
data_namespaceObject.links.forEach(function (link) {
  return menu += "<a href=\"".concat(link[1], "\">").concat(link[0], "</a>");
});
h1.textContent = "Webpack";
p.textContent = "Creando la primera aplicación con Webpack";
img.src = webpack_logo;
nav.classList.add("Menu");
nav.innerHTML = menu;
app.appendChild(nav);
app.appendChild(h1);
app.appendChild(p);
app.appendChild(img);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLnN0YXJ0ZXIua2l0LTIwMjEuZWl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2suc3RhcnRlci5raXQtMjAyMS5laXQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLnN0YXJ0ZXIua2l0LTIwMjEuZWl0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2suc3RhcnRlci5raXQtMjAyMS5laXQvLi9zcmMvaW1nL3dlYnBhY2stbG9nby5zdmciLCJ3ZWJwYWNrOi8vd2VicGFjay5zdGFydGVyLmtpdC0yMDIxLmVpdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiYXJyIiwiY29kZUVTNiIsImRhdGEiLCJkIiwiZG9jdW1lbnQiLCJhcHAiLCJnZXRFbGVtZW50QnlJZCIsImgxIiwiY3JlYXRlRWxlbWVudCIsInAiLCJpbWciLCJuYXYiLCJtZW51IiwibGluayIsInRleHRDb250ZW50Iiwic3JjIiwibG9nbyIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7QUNmQSxtREFBZSxxQkFBdUIsNEJBQTRCLEU7O0NDQ2xFO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBRUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9EQUFaO0FBRUEsSUFBTUMsR0FBRyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVo7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQTs7QUFBQSxTQUFNLFlBQUFILE9BQU8sRUFBQ0MsR0FBUixpQkFBZUMsR0FBZixDQUFOO0FBQUEsQ0FBZDs7QUFFQUMsT0FBTyxHLENBRVA7O0FBQ0FILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxvQkFBWixFQUFrQkEseUJBQWxCO0FBRUE7O0FBRUEsSUFBTUMsQ0FBQyxHQUFHQyxRQUFWO0FBQUEsSUFDRUMsR0FBRyxHQUFHRixDQUFDLENBQUNHLGNBQUYsQ0FBaUIsS0FBakIsQ0FEUjtBQUFBLElBRUVDLEVBQUUsR0FBR0osQ0FBQyxDQUFDSyxhQUFGLENBQWdCLElBQWhCLENBRlA7QUFBQSxJQUdFQyxDQUFDLEdBQUdOLENBQUMsQ0FBQ0ssYUFBRixDQUFnQixHQUFoQixDQUhOO0FBQUEsSUFJRUUsR0FBRyxHQUFHUCxDQUFDLENBQUNLLGFBQUYsQ0FBZ0IsS0FBaEIsQ0FKUjtBQUFBLElBS0VHLEdBQUcsR0FBR1IsQ0FBQyxDQUFDSyxhQUFGLENBQWdCLEtBQWhCLENBTFI7QUFPQSxJQUFJSSxJQUFJLEdBQUcsRUFBWDtBQUVBVixrQ0FBQSxDQUFtQixVQUFBVyxJQUFJO0FBQUEsU0FBS0QsSUFBSSx3QkFBZ0JDLElBQUksQ0FBQyxDQUFELENBQXBCLGdCQUE0QkEsSUFBSSxDQUFDLENBQUQsQ0FBaEMsU0FBVDtBQUFBLENBQXZCO0FBRUFOLEVBQUUsQ0FBQ08sV0FBSCxHQUFpQixTQUFqQjtBQUNBTCxDQUFDLENBQUNLLFdBQUYsR0FBZ0IsMkNBQWhCO0FBQ0FKLEdBQUcsQ0FBQ0ssR0FBSixHQUFVQyxZQUFWO0FBRUFMLEdBQUcsQ0FBQ00sU0FBSixDQUFjQyxHQUFkLENBQWtCLE1BQWxCO0FBQ0FQLEdBQUcsQ0FBQ1EsU0FBSixHQUFnQlAsSUFBaEI7QUFDQVAsR0FBRyxDQUFDZSxXQUFKLENBQWdCVCxHQUFoQjtBQUVBTixHQUFHLENBQUNlLFdBQUosQ0FBZ0JiLEVBQWhCO0FBQ0FGLEdBQUcsQ0FBQ2UsV0FBSixDQUFnQlgsQ0FBaEI7QUFDQUosR0FBRyxDQUFDZSxXQUFKLENBQWdCVixHQUFoQixFIiwiZmlsZSI6ImpzLmIzZDE3OTk0MTRiZmZmMjJlNThlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3dlYnBhY2stbG9nby5zdmdcIjsiLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcbi8vIG9cbi8vIGltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHNhc3MgZnJvbSBcIi4vc2Nzcy9tYWluLnNjc3NcIjtcblxuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YS5qc29uXCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi9pbWcvd2VicGFjay1sb2dvLnN2Z1wiO1xuXG5jb25zb2xlLmxvZyhcIkFsb2hhIE11TkRvIGRlc2RlIERvbm9zdGlhIHNpbiB3ZWJwYWNrLmNvbmZpZy5qcyEhXCIpO1xuXG5jb25zdCBhcnIgPSBbMSwgMiwgNF07XG5sZXQgY29kZUVTNiA9ICgpID0+IGNvbnNvbGUubG9nKC4uLmFycik7XG5cbmNvZGVFUzYoKTtcblxuLy8gSW1wcmltaWVuZG8gZWwgb2JqZXRvIGNvbXBsZXRvIHkgZWwgdmFsb3IgZGUgdW5hIGRlIHN1cyBjbGF2ZXNcbmNvbnNvbGUubG9nKGRhdGEsIGRhdGEubmFtZSk7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5jb25zdCBkID0gZG9jdW1lbnQsXG4gIGFwcCA9IGQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIiksXG4gIGgxID0gZC5jcmVhdGVFbGVtZW50KFwiaDFcIiksXG4gIHAgPSBkLmNyZWF0ZUVsZW1lbnQoXCJwXCIpLFxuICBpbWcgPSBkLmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksXG4gIG5hdiA9IGQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxubGV0IG1lbnUgPSBcIlwiO1xuXG5kYXRhLmxpbmtzLmZvckVhY2gobGluayA9PiAobWVudSArPSBgPGEgaHJlZj1cIiR7bGlua1sxXX1cIj4ke2xpbmtbMF19PC9hPmApKTtcblxuaDEudGV4dENvbnRlbnQgPSBcIldlYnBhY2tcIjtcbnAudGV4dENvbnRlbnQgPSBcIkNyZWFuZG8gbGEgcHJpbWVyYSBhcGxpY2FjacOzbiBjb24gV2VicGFja1wiO1xuaW1nLnNyYyA9IGxvZ287XG5cbm5hdi5jbGFzc0xpc3QuYWRkKFwiTWVudVwiKTtcbm5hdi5pbm5lckhUTUwgPSBtZW51O1xuYXBwLmFwcGVuZENoaWxkKG5hdik7XG5cbmFwcC5hcHBlbmRDaGlsZChoMSk7XG5hcHAuYXBwZW5kQ2hpbGQocCk7XG5hcHAuYXBwZW5kQ2hpbGQoaW1nKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=