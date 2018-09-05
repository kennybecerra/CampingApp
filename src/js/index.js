import style from "../scss/main.scss";
//import img from "../images/wow.jpg";
import {myFunc} from "./test.js";

function requireAll(r) { r.keys().forEach(r); } 
requireAll(require.context('../images/SVG/', true, /\.svg$/));
//requireAll(require.context('../images/', true,  /\.(png|jpeg|jpg)$/));

let a = "hello";

console.log(a);

myFunc();

