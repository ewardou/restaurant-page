import createLayout from "./element";
import "./style.css";
import createHomeSection from "./home";
import createPoliciesSection from "./policies";

let content=document.querySelector("#content");
content.append(createLayout().header,createLayout().tabsContainer,createLayout().main);

createHomeSection().render();

function removeContent(){
    let contentToRemove=document.querySelectorAll("section");
    contentToRemove.forEach(section=>{
        document.querySelector("main").removeChild(section);
    });
};

// let tabs=document.querySelectorAll("div>ul>li");
// tabs.forEach(tab=>{
//     tab.addEventListener("click",removeContent);
// });
let policiesTab=document.querySelector("div>ul>li:last-of-type");
policiesTab.addEventListener("click",()=>{
    removeContent();
    createPoliciesSection().render();
})