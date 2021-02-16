import styles from "./styles.css";
// o
// import "./styles.css";
import sass from "./scss/main.scss";

import data from "./data.json";
import logo from "./img/webpack-logo.svg";

console.log("Aloha MuNDo desde Donostia sin webpack.config.js!!");

const arr = [1, 2, 4];
let codeES6 = () => console.log(...arr);

codeES6();

// Imprimiendo el objeto completo y el valor de una de sus claves
console.log(data, data.name);

/* ****************************************** */

const d = document,
  app = d.getElementById("app"),
  h1 = d.createElement("h1"),
  p = d.createElement("p"),
  img = d.createElement("img"),
  nav = d.createElement("nav");

let menu = "";

data.links.forEach(link => (menu += `<a href="${link[1]}">${link[0]}</a>`));

h1.textContent = "Webpack";
p.textContent = "Creando la primera aplicación con Webpack";
img.src = logo;

nav.classList.add("Menu");
nav.innerHTML = menu;
app.appendChild(nav);

app.appendChild(h1);
app.appendChild(p);
app.appendChild(img);
