import React from "react";

const TodoItems = ({ todoItems, deleteTodoItem }) => {
  const todoList =
    todoItems.length === 0 ? (
      <p>No todos</p>
    ) : (
      todoItems.map(todo => {
        return (
          <p key={todo.id}>
            {todo.content}
            <input
              type="button"
              value="delete"
              onClick={() => {
                deleteTodoItem(todo.id);
              }}
            />
          </p>
        );
      })
    );
  return todoList;
};
export default TodoItems;
