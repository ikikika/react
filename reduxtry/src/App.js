import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import Posts from "./components/Posts";

function App() {
  return (
    <Provider store={store}>
      <div className="App">test</div>
    </Provider>
  );
}

export default App;
