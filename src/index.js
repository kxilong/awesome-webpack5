import a from "./add.js";
import Icon from "../assets/a.png";

const myIcon = new Image();
myIcon.src = Icon;
myIcon.style = "width:100%";
const element = document.createElement("div");
element.appendChild(myIcon);
document.body.appendChild(element);

console.log(a);
