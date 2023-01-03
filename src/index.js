import {add, hello} from "./util";
import "./style.css";
import "./header.css"
import logo from "./images/forestLogo.png";

const text = hello("<h1>LEEEee!</h1>");
const num = add(1,2);
const img = `<img src=${logo} alt="ori"/>`;

document.getElementById("root").innerHTML = img + text + num;