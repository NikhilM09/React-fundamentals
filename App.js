import React from 'react'
import ReactDOM from 'react-dom/client'

console.log("React", React);
console.log("ReactDom", ReactDOM);

const heading1 = React.createElement("h1",{className : "heading1"}, "Kolkata Knight Riders (KKR)");
const heading2 = React.createElement("h1",{className : "heading3"}, "Mumbai Indians (MI)");

const container1 = React.createElement("div",{className : "container"}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container1);

