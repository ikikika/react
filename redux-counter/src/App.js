import React from "react";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
      {state.counter}
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
