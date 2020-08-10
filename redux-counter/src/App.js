import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          name="title"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch({ type: "ADD_TODO", payload: newTodo });
          }}
        >
          Submit
        </button>
      </div>
      <table border="1">
        <tbody>
          {state.todoItems.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{!item.completed && <button>Complete</button>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
