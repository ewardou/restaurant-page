import createLayout from "./element";
import krustykrab from "./My_Two_Krabses_001.jpg";

function createHomeSection(){
    let locationSection=createLayout().createElement("section");
    let locationTitle=createLayout().createElement("h2","Location");
    let locationPara=createLayout().createElement("p","831 Bottomfeeder Lane, Bikini Bottom, Pacific Ocean");

    let image=createLayout().createElement("img");
    image.setAttribute("src",krustykrab);

    locationSection.append(locationTitle,locationPara,image);

    return locationSection;
};

export default createHomeSection;