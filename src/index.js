import createLayout from "./element";

let content=document.querySelector("#content");
content.append(createLayout().header,createLayout().main);

console.log("Hola frijol");