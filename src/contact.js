import createLayout from "./element";
import phoneImage from "./images/phone_icon.svg";
import pacificOceanImage from "./images/pacific_ocean.png";
import locationImage from "./images/location_icon.svg";
import mailIcon from "./images/mail_icon.svg";

function createContactSection(){
    let contactSection=createLayout().createElement("section");

    let createGroup=(textContent,image)=>{
        let div=createLayout().createElement("div");
        let text=createLayout().createElement("p",textContent);
        let icon=createLayout().createElement("img");
        icon.setAttribute("src",image);
        div.append(icon,text);
        return div;    
    }
    let tlf=createGroup("(555)-555-5555",phoneImage);
    let location=createGroup("831 Bottomfeeder Lane, Bikini Bottom, Pacific Ocean",locationImage);
    let message=createGroup("Message us",mailIcon);

    let createFormElement=(type,id,labelText)=>{
        let div=createLayout().createElement("div");
        let label=createLayout().createElement("id",labelText);
        label.setAttribute("for",id);
        let input=createLayout().createElement("input");
        input.setAttribute("type",type);
        input.setAttribute("id",id);
        if (type==="textarea"){input=createLayout().createElement("textarea")};
        div.append(label,input);
        return div;
    };

    let nameInput=createFormElement("text","name","Full name");
    let emailInput=createFormElement("email","email","E-mail");
    let textArea=createFormElement("textarea","message","Write your message");

    let button=createLayout().createElement("button","Submit");
    button.setAttribute("type","button");
    let form=createLayout().createElement("form");
    form.append(nameInput,emailInput,textArea,button);

    let pacificOcean=createLayout().createElement("img");
    pacificOcean.setAttribute("src",pacificOceanImage);
    contactSection.append(tlf,location,message,form,pacificOcean);

    let render=function(){
        contactSection.classList.add("contact");
        document.querySelector("main").appendChild(contactSection);
    };
    return {
        render
    }
};
export default createContactSection;