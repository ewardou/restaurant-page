import createLayout from "./element";

function createPoliciesSection(){
    let section=createLayout().createElement("section");
    let policiesTitle=createLayout().createElement("h2","Policies");
    let ul=createLayout().createElement("ul");
    let rules=[
        createLayout().createElement("li","Nobody eats in the Krusty Krab for free (royalty or not)."),
        createLayout().createElement("li","Once the patty has reached the customer, it is his / her responsibility."),
        createLayout().createElement("li","No free napkins."),
        createLayout().createElement("li","No free refills."),
        createLayout().createElement("li","A standing fee will be given if a customer does not order anything."),
        createLayout().createElement("li","No refunds."),
        createLayout().createElement("li","Any money brought into the Krusty Krab must be spent in the Krusty Krab."),
        createLayout().createElement("li","There is a 5 dollar complaint fee"),
        createLayout().createElement("li","The Krabby Patty secret formula is the sole property of the Krusty Krab and is only to be discussed in part or in whole with its creator Mr. Krabs. Duplication of this formula is punishable by law. Restrictions apply, results may vary.")
    ];
    rules.forEach(rule=>{
        ul.appendChild(rule);
    });
    section.append(policiesTitle,ul);
    let render=function(){
        section.classList.add("policies");
        document.querySelector("main").appendChild(section);
    };
    return {
        render
    }
};

export default createPoliciesSection;