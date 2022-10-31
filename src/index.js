import createLayout from "./element";
import "./style.css";
import createHomeSection from "./home";
import createPoliciesSection from "./policies";
import createMenuSection from "./menu";
import createContactSection from "./contact";

let content=document.querySelector("#content");
content.append(createLayout().header,createLayout().tabsContainer,createLayout().main);

function initializePage(){
    createHomeSection().render();
    document.querySelector("button").addEventListener("click",()=>{
        removeContent();
        menuTab.classList.add("active");
        createMenuSection().render();
    });
};
initializePage();

document.querySelector("button").addEventListener("click",()=>{
    removeContent();
    menuTab.classList.add("active");
    createMenuSection().render();
})

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

let homeTab=document.querySelector("div>ul>li:first-of-type");
homeTab.classList.add("active");
homeTab.addEventListener("click",()=>{
    removeContent();
    homeTab.classList.add("active");
    initializePage();
})

let menuTab=document.querySelector("div>ul>li:nth-of-type(2)");
menuTab.addEventListener("click",()=>{
    removeContent();
    menuTab.classList.add("active");
    createMenuSection().render();
});

let policiesTab=document.querySelector("div>ul>li:last-of-type");
policiesTab.addEventListener("click",()=>{
    removeContent();
    policiesTab.classList.add("active");
    createPoliciesSection().render();
});

let contactTab=document.querySelector("div>ul>li:nth-of-type(3)");
contactTab.addEventListener("click",()=>{
    removeContent();
    contactTab.classList.add("active");
    createContactSection().render();
})