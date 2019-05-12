import React from "react";
//props are passed in as objects
const TodoItems = ({ todos, deleteThisTodo }) => {
  const todoList =
    todos.length === 0 ? (
      <tr>
        <td colSpan="3">No todos</td>
      </tr>
    ) : (
      todos.map(todo => {
        return (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.content}</td>
            <td>
              <input
                type="button"
                value="delete"
                onClick={() => {
                  deleteThisTodo(todo.id);
                }}
              />
            </td>
          </tr>
        );
      })
    );
  return todoList;
};
export default TodoItems;
