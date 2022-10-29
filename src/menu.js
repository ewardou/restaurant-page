import createLayout from "./element";
import coralBitsImage from "./Coral_Bits.jpg";
import kelpShakeImage from "./kelp_shake.jpg";
import krabySupremeImage from "./super_kraby_supreme.jpg";
import krabbyPattyImage from "./krabby_patty.jpg";

function createMenuSection(){

    let createItem=function(title,description,price,image){
        let container=createLayout().createElement("div");
        let itemTitle=createLayout().createElement("h4",title);
        let itemDescription=createLayout().createElement("p",description);
        let itemPrice=createLayout().createElement("p",`Price: $${price}`);
        let itemImage=createLayout().createElement("img");
        itemImage.setAttribute("src",image);
    
        container.append(itemTitle,itemDescription,itemPrice,itemImage);    
        container.classList.add("item");
        return container;
    };

    let krabbyPatty=createItem("The Krabby Patty","Our signature item. It is a meatless hamburger of sorts made from seaweed-sea buns, undersea vegetables, condiments, and the patty made with our secret formula. It can also be ordered with cheese.",4,krabbyPattyImage);

    let coralBits=createItem("Coral Bits","Side dish that consist of small bits of pale pink corals served in a red and yellow paper food tray. There is also a chili variation of the product.",1.05,coralBitsImage);

    let kelpShake=createItem("Kelp Shake","An addictive soft drink made 99% of kelp juice, the remaining percentile is an unknown material. It might produce side effects.",2,kelpShakeImage);

    let ultraKrabySupreme=createItem("Ultra Krabby Supreme","Larger variation of the Krabby Patty. The outside is a yellow-ish color like batter. It can also be batter-fried twice, or be on a stick, only if the customer requests it.",6,krabySupremeImage);

    let menuSection=createLayout().createElement("section");
    menuSection.append(krabbyPatty,coralBits,kelpShake,ultraKrabySupreme);

    let render=function(){
        menuSection.classList.add("menu");
        document.querySelector("main").appendChild(menuSection);
    };
    return {
        render
    }
};

export default createMenuSection;