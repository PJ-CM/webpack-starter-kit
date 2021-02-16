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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLnN0YXJ0ZXIua2l0LTIwMjEuZWl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2suc3RhcnRlci5raXQtMjAyMS5laXQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLnN0YXJ0ZXIua2l0LTIwMjEuZWl0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2suc3RhcnRlci5raXQtMjAyMS5laXQvLi9zcmMvaW1nL3R5cGVzY3JpcHQtbG9nby5zdmciLCJ3ZWJwYWNrOi8vd2VicGFjay5zdGFydGVyLmtpdC0yMDIxLmVpdC8uL3NyYy9BbG9oYS50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLnN0YXJ0ZXIua2l0LTIwMjEuZWl0Ly4vc3JjL2Fsb2hhX3RzLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJkIiwiZG9jdW1lbnQiLCJhcHAiLCJnZXRFbGVtZW50QnlJZCIsImgxIiwiY3JlYXRlRWxlbWVudCIsInAiLCJpbWciLCJuYXYiLCJhbG9oYSIsIkFsb2hhIiwibWVudSIsImRhdGEiLCJsaW5rIiwidGV4dENvbnRlbnQiLCJpbm5lckhUTUwiLCJncmVldCIsInNyYyIsImxvZ28iLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQ7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7O0FDZkEsc0RBQWUscUJBQXVCLCtCQUErQixFOztBQ0FyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNnQjs7O0FDVGpCO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMkRBQVo7QUFFQTs7QUFFQSxJQUFNQyxDQUFDLEdBQUdDLFFBQVY7QUFBQSxJQUNFQyxHQUFHLEdBQUdGLENBQUMsQ0FBQ0csY0FBRixDQUFpQixLQUFqQixDQURSO0FBQUEsSUFFRUMsRUFBRSxHQUFHSixDQUFDLENBQUNLLGFBQUYsQ0FBZ0IsSUFBaEIsQ0FGUDtBQUFBLElBR0VDLENBQUMsR0FBR04sQ0FBQyxDQUFDSyxhQUFGLENBQWdCLEdBQWhCLENBSE47QUFBQSxJQUlFRSxHQUFHLEdBQUdQLENBQUMsQ0FBQ0ssYUFBRixDQUFnQixLQUFoQixDQUpSO0FBQUEsSUFLRUcsR0FBRyxHQUFHUixDQUFDLENBQUNLLGFBQUYsQ0FBZ0IsS0FBaEIsQ0FMUjtBQUFBLElBTUVJLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVUsWUFBVixDQU5WO0FBUUEsSUFBSUMsSUFBSSxHQUFHLEVBQVg7QUFFQUMsa0NBQUEsQ0FBbUIsVUFBQUMsSUFBSTtBQUFBLFNBQUtGLElBQUksd0JBQWdCRSxJQUFJLENBQUMsQ0FBRCxDQUFwQixnQkFBNEJBLElBQUksQ0FBQyxDQUFELENBQWhDLFNBQVQ7QUFBQSxDQUF2QjtBQUVBVCxFQUFFLENBQUNVLFdBQUgsR0FBaUIsc0JBQWpCO0FBQ0FSLENBQUMsQ0FBQ1MsU0FBRixHQUNFTixLQUFLLENBQUNPLEtBQU4sS0FBZ0IsTUFBaEIsR0FBeUIsMkNBRDNCO0FBRUFULEdBQUcsQ0FBQ1UsR0FBSixHQUFVQyxlQUFWO0FBRUFWLEdBQUcsQ0FBQ1csU0FBSixDQUFjQyxHQUFkLENBQWtCLE1BQWxCO0FBQ0FaLEdBQUcsQ0FBQ08sU0FBSixHQUFnQkosSUFBaEI7QUFDQVQsR0FBRyxDQUFDbUIsV0FBSixDQUFnQmIsR0FBaEI7QUFFQU4sR0FBRyxDQUFDbUIsV0FBSixDQUFnQmpCLEVBQWhCO0FBQ0FGLEdBQUcsQ0FBQ21CLFdBQUosQ0FBZ0JmLENBQWhCO0FBQ0FKLEdBQUcsQ0FBQ21CLFdBQUosQ0FBZ0JkLEdBQWhCO0FBRUFULE9BQU8sQ0FBQ0MsR0FBUixDQUFZYSxvQkFBWixFIiwiZmlsZSI6InRzLjZjNjgwMTlmMzhiMGE1ZDFiY2I3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3R5cGVzY3JpcHQtbG9nby5zdmdcIjsiLCJ2YXIgQWxvaGEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBbG9oYShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuICAgIEFsb2hhLnByb3RvdHlwZS5ncmVldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJBbG9oYSwgV2VicGFjayBjb24gXCIgKyB0aGlzLm5hbWU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFsb2hhO1xyXG59KCkpO1xyXG5leHBvcnQgeyBBbG9oYSB9O1xyXG4iLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBzYXNzIGZyb20gXCIuL3Njc3MvbWFpbi5zY3NzXCI7XG5cbmltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGEuanNvblwiO1xuaW1wb3J0IGxvZ28gZnJvbSBcIi4vaW1nL3R5cGVzY3JpcHQtbG9nby5zdmdcIjtcblxuaW1wb3J0IHsgQWxvaGEgfSBmcm9tIFwiLi9BbG9oYS50c1wiO1xuXG5jb25zb2xlLmxvZyhcIkFsb2hhIE11TkRvIGRlc2RlIERvbm9zdGlhIGNvbiBUeXBlU2NyaXB0IGRlc2RlIFdlYnBhY2shIVwiKTtcblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbmNvbnN0IGQgPSBkb2N1bWVudCxcbiAgYXBwID0gZC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSxcbiAgaDEgPSBkLmNyZWF0ZUVsZW1lbnQoXCJoMVwiKSxcbiAgcCA9IGQuY3JlYXRlRWxlbWVudChcInBcIiksXG4gIGltZyA9IGQuY3JlYXRlRWxlbWVudChcImltZ1wiKSxcbiAgbmF2ID0gZC5jcmVhdGVFbGVtZW50KFwibmF2XCIpLFxuICBhbG9oYSA9IG5ldyBBbG9oYShcIlR5cGVTY3JpcHRcIik7XG5cbmxldCBtZW51ID0gXCJcIjtcblxuZGF0YS5saW5rcy5mb3JFYWNoKGxpbmsgPT4gKG1lbnUgKz0gYDxhIGhyZWY9XCIke2xpbmtbMV19XCI+JHtsaW5rWzBdfTwvYT5gKSk7XG5cbmgxLnRleHRDb250ZW50ID0gXCJXZWJwYWNrICsgVHlwZVNjcmlwdFwiO1xucC5pbm5lckhUTUwgPVxuICBhbG9oYS5ncmVldCgpICsgXCI8YnI+XCIgKyBcIkNyZWFuZG8gbGEgcHJpbWVyYSBhcGxpY2FjacOzbiBjb24gV2VicGFja1wiO1xuaW1nLnNyYyA9IGxvZ287XG5cbm5hdi5jbGFzc0xpc3QuYWRkKFwiTWVudVwiKTtcbm5hdi5pbm5lckhUTUwgPSBtZW51O1xuYXBwLmFwcGVuZENoaWxkKG5hdik7XG5cbmFwcC5hcHBlbmRDaGlsZChoMSk7XG5hcHAuYXBwZW5kQ2hpbGQocCk7XG5hcHAuYXBwZW5kQ2hpbGQoaW1nKTtcblxuY29uc29sZS5sb2coZGF0YSk7XG4iXSwic291cmNlUm9vdCI6IiJ9