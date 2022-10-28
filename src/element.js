import logo from "./PngItem_3433384.png";

function createLayout(){
    let createElement=(type,content="")=>{
        let element=document.createElement(type);
        element.textContent=content;
        return element
    };

    let image=createElement("img");
    image.setAttribute("src",logo);

    let header=createElement("header");
    let tabsContainer=createElement("ul");
    let homeTab=createElement("li");
    let menuTab=createElement("li");
    let contactTab=createElement("li");

    homeTab.append(createElement("a","Home"));
    menuTab.append(createElement("a","Menu"));
    contactTab.append(createElement("a","Contact"));

    tabsContainer.append(homeTab,menuTab,contactTab);

    header.append(image,tabsContainer);
    let main=createElement("main");

    return {
        header,
        main,
        createElement
    };
}


export default createLayout;