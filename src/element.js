import logo from "./images/PngItem_3433384.png";

function createLayout(){
    let createElement=(type,content="")=>{
        let element=document.createElement(type);
        element.textContent=content;
        return element
    };

    let image=createElement("img");
    image.setAttribute("src",logo);

    let header=createElement("header");
    let tabsBar=createElement("ul");
    let homeTab=createElement("li");
    let menuTab=createElement("li");
    let contactTab=createElement("li");
    let policiesTab=createElement("li")

    homeTab.append(createElement("a","Home"));
    menuTab.append(createElement("a","Menu"));
    contactTab.append(createElement("a","Contact"));
    policiesTab.append(createElement("a","Policies"));

    tabsBar.append(homeTab,menuTab,contactTab,policiesTab);

    header.append(image);
    let tabsContainer=createElement("div");
    tabsContainer.append(tabsBar);
    tabsContainer.classList.add("tabs")

    let main=createElement("main");

    return {
        header,
        tabsContainer,
        main,
        createElement
    };
}


export default createLayout;