import React from "react";

import ReactDOM from "react-dom/client";

import Hello from './components/index'

let rootEle = document.getElementById('root');

let root = ReactDOM.createRoot(rootEle);

root.render(<Hello/>);
