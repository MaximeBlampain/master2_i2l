// Easy way
/*
const main = document.getElementById("main-content");


const newDiv = document.createElement("div");
newDiv.classList.add("inner-content", "fluid");

main.appendChild(newDiv);

const newH2 = document.createElement("h2");
newH2.textContent = "Subtitle";
newH2.addEventListener("onclick", () => alert("Subtitle clicked !"));

newdiv.appendChild(newH2);

*/


const root = document.getElementById("root");

let vDom = {
    tagName: 'div',
    classNames: ["coucou", "toi"],
    children: [{
        tagName: 'h2',
        textNode: 'Hello World !',
        classNames: [],
        events:
            [
                {
                    eventName: 'click',
                    callback: () => {
                        alert('Clicked !');
                    }
                }
            ]

    }]
};

let vDomV2 = {
    tagName: 'section',
    classNames: ["coucou"],
    children: [{
        tagName: 'h2',
        textNode: 'Hello World !',
        classNames: [],
        events:
            [
                {
                    eventName: 'click',
                    callback: () => {
                        alert('Clicked !');
                    }
                }
            ]

    }]
}
function buildVDom(vdom){
    if(!vdom.hasOwnProperty("tagName") || vdom.tagName === "")
        return undefined;

    let element = document.createElement(vdom.tagName);
    Object.keys(vdom).forEach(key => {
        switch(key){
            case "classNames":
                if(vdom.classNames.length > 0)
                    element.classList.add(...vdom.classNames);
                break;
            case "textNode" :
                element.textContent = vdom.textNode;
                break;
            case "events":
                vdom.events.forEach(ev => {
                    if(ev?.eventName !== "" && typeof ev?.callback === "function")
                        element.addEventListener(ev.eventName, ev.callback);
                })
                break;
            case "tagName":
            default:
                break;
        }
    })

    if(vdom?.children && vdom?.children.length > 0) {
        vdom.children.forEach(child => {
            let htmlChild = buildVDom(child);
            if(htmlChild !== undefined)
                element.appendChild(htmlChild);
        })
    }

    return element;
}


function compareField(ref, field){
    if(typeof ref !== typeof field) return false;
    switch(typeof ref) {
        case "string":
        case "number":
        case "boolean":
            return ref === field;
        case "object":
            if(Array.isArray(ref)){
                return !ref
                    .map((key, index) =>  compareField(key, field[index]))
                    .includes(false)
            } else {
                return !Object.keys(ref)
                    .map(key => {
                        if (!field.hasOwnProperty(key)) return false;

                        return compareField(ref[key], field[key]);
                    })
                    .includes(false)
            }
    }
}

compareField(vDom, vDomV2)

let dom1 = buildVDom(vDom);
let dom2 = buildVDom(vDomV2);

console.log(compareField(dom1,dom2));
root.appendChild(result)