import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header"

let rootEle= document.querySelector('#root');
let root=ReactDOM.createRoot(rootEle);
root.render(<Header/>);
//ReactDOM.render(<Header/>,document.getElementById)