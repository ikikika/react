import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Employees from "./components/Employees";

function App() {
  return (
    <Provider store={store}>
      <Employees />
    </Provider>
  );
}

export default App;
