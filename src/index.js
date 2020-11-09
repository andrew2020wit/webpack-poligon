import js1 from "./assets/1.json";
import logo from "./assets/webpack.png";
import { getHello } from "./lib";
import "./styles/scss.scss";
import "./styles/styles.css";

getHello("Bob");

console.log("logo-name: ", logo);
console.log("js1: ", js1);
