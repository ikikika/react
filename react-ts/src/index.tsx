import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App"; //use curly braces because App is not default export

const ROOT = document.querySelector(".container");

ReactDOM.render(<App name="456" />, ROOT);
