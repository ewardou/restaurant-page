function createLayout(){
    let createElement=(type,content="")=>{
        let element=document.createElement(type);
        element.textContent=content;
        return element
    };

    let header=createElement("header");
    let tabsContainer=createElement("ul");
    let homeTab=createElement("li");
    let menuTab=createElement("li");
    let contactTab=createElement("li");

    homeTab.append(createElement("a","Home"));
    menuTab.append(createElement("a","Menu"));
    contactTab.append(createElement("a","Contact"));

    tabsContainer.append(homeTab,menuTab,contactTab);

    header.append(tabsContainer);
    let main=createElement("main");

    return {
        header,
        main
    };
}


export default createLayout;