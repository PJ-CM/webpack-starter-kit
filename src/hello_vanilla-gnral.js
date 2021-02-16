import styles from "./styles.css";
// o
// import "./styles.css";
import sass from "./scss/main.scss";

import data from "./data.json";
// import logo from "./img/webpack-logo.svg";
import logo from "./img/js-logo.png";

const arr = [1, 2, 4];
let codeES6 = () => console.log(...arr);

codeES6();

console.log("Aloha MuNDo desde Donostia sin webpack.config.js!!");

console.log(".: Empleo de Webpack y Babel :.");

// Imprimiendo el objeto completo y el valor de una de sus claves
console.log(data, data.name);

/* ****************************************** */

const d = document,
  app = d.getElementById("app"),
  img = d.createElement("img");

img.src = logo;

app.appendChild(img);
