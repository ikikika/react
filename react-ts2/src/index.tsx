import * as React from "react"; //need to "import *" for typescript
import * as ReactDOM from "react-dom";

import { App } from "./components/App"; // app is not default export

import "./styles/style.scss";

const ROOT = document.querySelector(".container");

ReactDOM.render(<App />, ROOT);
