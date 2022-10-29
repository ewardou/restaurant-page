import createLayout from "./element";
import "./style.css";
import createHomeSection from "./home";
import createPoliciesSection from "./policies";
import createMenuSection from "./menu";

let content=document.querySelector("#content");
content.append(createLayout().header,createLayout().tabsContainer,createLayout().main);

createHomeSection().render();

function removeContent(){
    let contentToRemove=document.querySelectorAll("section");
    contentToRemove.forEach(section=>{
        document.querySelector("main").removeChild(section);
    });
    let tabs=document.querySelectorAll("div>ul>li");
    tabs.forEach(tab=>{
        tab.classList.remove("active");
    })
};

// let tabs=document.querySelectorAll("div>ul>li");
// tabs.forEach(tab=>{
//     tab.addEventListener("click",removeContent);
// });
let menuTab=document.querySelector("div>ul>li:nth-of-type(2)");
menuTab.addEventListener("click",()=>{
    removeContent();
    menuTab.classList.add("active")
    createMenuSection().render();
})

let policiesTab=document.querySelector("div>ul>li:last-of-type");
policiesTab.addEventListener("click",()=>{
    removeContent();
    policiesTab.classList.add("active");
    createPoliciesSection().render();
})