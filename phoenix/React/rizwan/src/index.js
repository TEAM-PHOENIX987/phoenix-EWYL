import React from "react";

import ReactDOM from "react-dom/client";

let rootele = document.getElementById("root");

let root = ReactDOM.createRoot(rootele);

import App from "./components/app/app"
root.render(<App/>);