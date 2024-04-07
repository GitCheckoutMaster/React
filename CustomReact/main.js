function customRender(newElementObj, container) {
    let element = document.createElement(newElementObj.type);
    element.innerHTML = newElementObj.text;
    
    for (let key in newElementObj.attrs) {
        element.setAttribute(key, newElementObj.attrs[key]);
    }
    setTimeout(() => {
        container.appendChild(element);
    }, 2000);
}

// react internally handles dom elements this way
const element = {
    type: "a",
    attrs: {
        href: "https://www.google.com",
        id: "google_link"
    },
    childrens: [],  // array of objects of childrens just like this object
    text: "Click for the ride of google"
};

const mainContainer = document.getElementById("root");
customRender(element, mainContainer);
