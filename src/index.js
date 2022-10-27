import createLayout from "./element";
import "./style.css"

let content=document.querySelector("#content");
content.append(createLayout().header,createLayout().main);

console.log("Hola frijol");