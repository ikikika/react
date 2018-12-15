import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App"; //use curly braces because App is not default export
import "./styles/style.scss";

const ROOT = document.querySelector(".container");

ReactDOM.render(<App />, ROOT);
