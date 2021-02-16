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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLnN0YXJ0ZXIua2l0LTIwMjEuZWl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2suc3RhcnRlci5raXQtMjAyMS5laXQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLnN0YXJ0ZXIua2l0LTIwMjEuZWl0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2suc3RhcnRlci5raXQtMjAyMS5laXQvLi9zcmMvaW1nL2pzLWxvZ28ucG5nIiwid2VicGFjazovL3dlYnBhY2suc3RhcnRlci5raXQtMjAyMS5laXQvLi9zcmMvQWxvaGEuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay5zdGFydGVyLmtpdC0yMDIxLmVpdC8uL3NyYy9hbG9oYV92YW5pbGxhLmpzIl0sIm5hbWVzIjpbIkFsb2hhIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJkIiwiZG9jdW1lbnQiLCJhcHAiLCJnZXRFbGVtZW50QnlJZCIsImgxIiwiY3JlYXRlRWxlbWVudCIsInAiLCJpbWciLCJuYXYiLCJhbG9oYSIsIm1lbnUiLCJkYXRhIiwibGluayIsInRleHRDb250ZW50IiwiaW5uZXJIVE1MIiwiZ3JlZXQiLCJzcmMiLCJsb2dvIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7OztBQ2ZBLDhDQUFlLHFCQUF1Qix1QkFBdUIsRTs7Ozs7Ozs7QUNBdEQsSUFBTUEsS0FBYjtBQUNFLGlCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOztBQUhIO0FBQUE7QUFBQSxXQUtFLGlCQUFRO0FBQ04sMENBQTZCLEtBQUtBLElBQWxDO0FBQ0Q7QUFQSDs7QUFBQTtBQUFBLEk7O0NDQ0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSwwREFBWjtBQUVBOztBQUVBLElBQU1DLENBQUMsR0FBR0MsUUFBVjtBQUFBLElBQ0VDLEdBQUcsR0FBR0YsQ0FBQyxDQUFDRyxjQUFGLENBQWlCLEtBQWpCLENBRFI7QUFBQSxJQUVFQyxFQUFFLEdBQUdKLENBQUMsQ0FBQ0ssYUFBRixDQUFnQixJQUFoQixDQUZQO0FBQUEsSUFHRUMsQ0FBQyxHQUFHTixDQUFDLENBQUNLLGFBQUYsQ0FBZ0IsR0FBaEIsQ0FITjtBQUFBLElBSUVFLEdBQUcsR0FBR1AsQ0FBQyxDQUFDSyxhQUFGLENBQWdCLEtBQWhCLENBSlI7QUFBQSxJQUtFRyxHQUFHLEdBQUdSLENBQUMsQ0FBQ0ssYUFBRixDQUFnQixLQUFoQixDQUxSO0FBQUEsSUFNRUksS0FBSyxHQUFHLElBQUliLEtBQUosQ0FBVSxXQUFWLENBTlY7QUFRQSxJQUFJYyxJQUFJLEdBQUcsRUFBWDtBQUVBQyxrQ0FBQSxDQUFtQixVQUFBQyxJQUFJO0FBQUEsU0FBS0YsSUFBSSx3QkFBZ0JFLElBQUksQ0FBQyxDQUFELENBQXBCLGdCQUE0QkEsSUFBSSxDQUFDLENBQUQsQ0FBaEMsU0FBVDtBQUFBLENBQXZCO0FBRUFSLEVBQUUsQ0FBQ1MsV0FBSCxHQUFpQixxQkFBakI7QUFDQVAsQ0FBQyxDQUFDUSxTQUFGLEdBQ0VMLEtBQUssQ0FBQ00sS0FBTixLQUFnQixNQUFoQixHQUF5QiwyQ0FEM0I7QUFFQVIsR0FBRyxDQUFDUyxHQUFKLEdBQVVDLE9BQVY7QUFFQVQsR0FBRyxDQUFDVSxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsTUFBbEI7QUFDQVgsR0FBRyxDQUFDTSxTQUFKLEdBQWdCSixJQUFoQjtBQUNBUixHQUFHLENBQUNrQixXQUFKLENBQWdCWixHQUFoQjtBQUVBTixHQUFHLENBQUNrQixXQUFKLENBQWdCaEIsRUFBaEI7QUFDQUYsR0FBRyxDQUFDa0IsV0FBSixDQUFnQmQsQ0FBaEI7QUFDQUosR0FBRyxDQUFDa0IsV0FBSixDQUFnQmIsR0FBaEIsRSIsImZpbGUiOiJ2YW5pbGxhLjIyMTkwOTQwNjcxYTE1NmZlYzYyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2pzLWxvZ28ucG5nXCI7IiwiZXhwb3J0IGNsYXNzIEFsb2hhIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBncmVldCgpIHtcbiAgICByZXR1cm4gYEFsb2hhLCBXZWJwYWNrIGNvbiAke3RoaXMubmFtZX0gISFgO1xuICB9XG59XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcbi8vIG9cbi8vIGltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHNhc3MgZnJvbSBcIi4vc2Nzcy9tYWluLnNjc3NcIjtcblxuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YS5qc29uXCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi9pbWcvanMtbG9nby5wbmdcIjtcblxuaW1wb3J0IHsgQWxvaGEgfSBmcm9tIFwiLi9BbG9oYVwiO1xuXG5jb25zb2xlLmxvZyhcIkFsb2hhIE11TkRvIGRlc2RlIERvbm9zdGlhIGNvbiBWYW5pbGxhSlMgZGVzZGUgV2VicGFjayEhXCIpO1xuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuY29uc3QgZCA9IGRvY3VtZW50LFxuICBhcHAgPSBkLmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpLFxuICBoMSA9IGQuY3JlYXRlRWxlbWVudChcImgxXCIpLFxuICBwID0gZC5jcmVhdGVFbGVtZW50KFwicFwiKSxcbiAgaW1nID0gZC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLFxuICBuYXYgPSBkLmNyZWF0ZUVsZW1lbnQoXCJuYXZcIiksXG4gIGFsb2hhID0gbmV3IEFsb2hhKFwiVmFuaWxsYUpTXCIpO1xuXG5sZXQgbWVudSA9IFwiXCI7XG5cbmRhdGEubGlua3MuZm9yRWFjaChsaW5rID0+IChtZW51ICs9IGA8YSBocmVmPVwiJHtsaW5rWzFdfVwiPiR7bGlua1swXX08L2E+YCkpO1xuXG5oMS50ZXh0Q29udGVudCA9IFwiV2VicGFjayArIFZhbmlsbGFKU1wiO1xucC5pbm5lckhUTUwgPVxuICBhbG9oYS5ncmVldCgpICsgXCI8YnI+XCIgKyBcIkNyZWFuZG8gbGEgcHJpbWVyYSBhcGxpY2FjacOzbiBjb24gV2VicGFja1wiO1xuaW1nLnNyYyA9IGxvZ287XG5cbm5hdi5jbGFzc0xpc3QuYWRkKFwiTWVudVwiKTtcbm5hdi5pbm5lckhUTUwgPSBtZW51O1xuYXBwLmFwcGVuZENoaWxkKG5hdik7XG5cbmFwcC5hcHBlbmRDaGlsZChoMSk7XG5hcHAuYXBwZW5kQ2hpbGQocCk7XG5hcHAuYXBwZW5kQ2hpbGQoaW1nKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=