import createLayout from "./element";
import krustykrab from "./images/My_Two_Krabses_001.jpg";
import krabbyPattyImage from "./images/krabby_patty.jpg";
import mrkrabsImage from "./images/mrkrabs.jpg";
import spongebobImage from "./images/spongebob.jpg";
import squidwardImage from "./images/squidward.png";

function createHomeSection(){

    let homeSection=createLayout().createElement("section");

    let headerSection=createLayout().createElement("div");
    let header=createLayout().createElement("h2","Welcome to the Krusty Krab, home of the famous Krabby Patty!");
    let lorem=createLayout().createElement("p","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet. Neque gravida in fermentum et. Ullamcorper a lacus vestibulum sed arcu non. Mauris a diam maecenas sed enim ut sem. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.")
    let krabbyPatty=createLayout().createElement("img");
    krabbyPatty.setAttribute("src",krabbyPattyImage);
    let orderButton=createLayout().createElement("button","Order now");

    headerSection.append(header,lorem,krabbyPatty,orderButton);

    //Team section
    let teamSection=createLayout().createElement("div");
    let teamTitle=createLayout().createElement("h3","The Krusty Krew");
    let createMember=function(image,name,position){
        let div=createLayout().createElement("div");
        let memberPicture=createLayout().createElement("img");
        memberPicture.setAttribute("src",image);
        let memberName=createLayout().createElement("p",name);
        let memberPosition=createLayout().createElement("p",position);

        div.append(memberPicture,memberName,memberPosition);
        return div;
    };
    let mrKrabs=createMember(mrkrabsImage,"Eugene H. Krabs","Owner");
    let spongebob=createMember(spongebobImage,"SpongeBob SquarePants","Fry cook");
    let squidward=createMember(squidwardImage,"Squidward Tentacles","Cashier and waiter");
    teamSection.append(teamTitle,mrKrabs,spongebob,squidward);

    //Location section
    let locationSection=createLayout().createElement("div");
    let locationTitle=createLayout().createElement("h2","Visit us at");
    let locationPara=createLayout().createElement("p","831 Bottomfeeder Lane, Bikini Bottom, Pacific Ocean");

    let image=createLayout().createElement("img");
    image.setAttribute("src",krustykrab);

    locationSection.append(locationTitle,locationPara,image);

    //Schedule section
    let scheduleSection=createLayout().createElement("div");
    let scheduleTitle=createLayout().createElement("h2","Schedule");
    let Sunday=createLayout().createElement("p","Sunday: 8am - 8pm");
    let Monday=createLayout().createElement("p","Monday: 6am - 6pm");
    let Tuesday=createLayout().createElement("p","Tuesday: 6am - 6pm");
    let Wednesday=createLayout().createElement("p","Wednesday: 6am - 6pm");
    let Thursday=createLayout().createElement("p","Thursday: 6am - 10pm");
    let Friday=createLayout().createElement("p","Friday: 6am - 10pm");
    let Saturday=createLayout().createElement("p","Saturday: 8am - 10pm");

    scheduleSection.append(scheduleTitle,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday);

    let container=createLayout().createElement("div");
    container.append(locationSection,scheduleSection)
    homeSection.append(headerSection,teamSection,container);


    let render=function(){
        homeSection.classList.add("home");
        document.querySelector("main").appendChild(homeSection);        
    }
    return {
        render
    };
};

export default createHomeSection;