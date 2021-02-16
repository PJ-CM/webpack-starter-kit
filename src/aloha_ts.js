import "./styles.css";
import sass from "./scss/main.scss";

import data from "./data.json";
import logo from "./img/typescript-logo.svg";

import { Aloha } from "./Aloha.ts";

console.log("Aloha MuNDo desde Donostia con TypeScript desde Webpack!!");

/* ****************************************** */

const d = document,
  app = d.getElementById("app"),
  h1 = d.createElement("h1"),
  p = d.createElement("p"),
  img = d.createElement("img"),
  nav = d.createElement("nav"),
  aloha = new Aloha("TypeScript");

let menu = "";

data.links.forEach(link => (menu += `<a href="${link[1]}">${link[0]}</a>`));

h1.textContent = "Webpack + TypeScript";
p.innerHTML =
  aloha.greet() + "<br>" + "Creando la primera aplicación con Webpack";
img.src = logo;

nav.classList.add("Menu");
nav.innerHTML = menu;
app.appendChild(nav);

app.appendChild(h1);
app.appendChild(p);
app.appendChild(img);

console.log(data);
