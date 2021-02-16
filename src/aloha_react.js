import "./styles.css";
import sass from "./scss/main.scss";

import React from "react";
import ReactDOM from "react-dom";

import data from "./data.json";
import logo from "./img/react-logo.svg";
import { Aloha } from "./Aloha.jsx";

ReactDOM.render(
  <Aloha name="React" logo={logo} menu={data.links} />,
  document.getElementById("app")
);
