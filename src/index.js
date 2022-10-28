import createLayout from "./element";
import "./style.css";
import createHomeSection from "./home";

let content=document.querySelector("#content");
content.append(createLayout().header,createLayout().main);

document.querySelector("main").appendChild(createHomeSection());

console.log("Hola frijol");