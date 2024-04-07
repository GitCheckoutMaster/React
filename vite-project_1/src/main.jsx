/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// function AnotherApp() {
//     return (
//         <>
//             <h2>Another heading in h2</h2>
//         </>
//     );
// }

const Element = <a href="https://www.google.com">Visit Somewhere</a>;

let website = " google ";
const reactElement = React.createElement(
    "a",
    {
        href: "https://www.google.com",
        traget: "_blank",
    },
    "Click me to visit",
    website,
    "(REACT ELEMENT)"
);

ReactDOM.createRoot(document.getElementById("root")).render(
    // <App />,
    // <AnotherApp />
    // <Element /> // This is wrong because this only works for getting the result value of return value of function
    // means this syntax only works for functions
    // Element
    reactElement
);
