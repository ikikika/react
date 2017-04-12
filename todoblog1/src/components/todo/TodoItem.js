import React from "react";

const TodoItem = ({ todoItems, deleteTodoItem }) => {
  const todoList = todoItems.length ? (
    todoItems.map(todo => {
      return (
        <tr key={todo.id}>
          <td>{todo.content}</td>
          <td>
            <button
              className="waves-effect waves-light btn"
              onClick={() => deleteTodoItem(todo.id)}
            >
              <i className="material-icons left">delete</i>
            </button>
          </td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td colSpan="2">No todos</td>
    </tr>
  );

  return todoList;
};

export default TodoItem;
