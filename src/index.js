import React from "react";
import { render } from "react-snapshot";
import "./reset.css";
import "./globals.css";
import Game from "./Game";
// import registerServiceWorker from './registerServiceWorker';

render(<Game />, document.getElementById("root"));
// registerServiceWorker();
