import createLayout from "./element";
import krustykrab from "./My_Two_Krabses_001.jpg";

function createHomeSection(){
    //Location section
    let locationSection=createLayout().createElement("section");
    let locationTitle=createLayout().createElement("h2","Location");
    let locationPara=createLayout().createElement("p","831 Bottomfeeder Lane, Bikini Bottom, Pacific Ocean");

    let image=createLayout().createElement("img");
    image.setAttribute("src",krustykrab);

    locationSection.append(locationTitle,locationPara,image);

    //Schedule section
    let scheduleSection=createLayout().createElement("section");
    let scheduleTitle=createLayout().createElement("h2","Schedule");
    let Sunday=createLayout().createElement("p","Sunday: 8am - 8pm");
    let Monday=createLayout().createElement("p","Monday: 6am - 6pm");
    let Tuesday=createLayout().createElement("p","Tuesday: 6am - 6pm");
    let Wednesday=createLayout().createElement("p","Wednesday: 6am - 6pm");
    let Thursday=createLayout().createElement("p","Thursday: 6am - 10pm");
    let Friday=createLayout().createElement("p","Friday: 6am - 10pm");
    let Saturday=createLayout().createElement("p","Saturday: 8am - 10pm");

    scheduleSection.append(scheduleTitle,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday);

    let render=function(){
        document.querySelector("main").appendChild(locationSection);
        document.querySelector("main").appendChild(scheduleSection);
    }
    return {
        render
    };
};

export default createHomeSection;