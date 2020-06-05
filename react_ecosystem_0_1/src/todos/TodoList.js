import React from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { removeTodo, completeTodo } from "./actions";
import { displayAlert } from "./thunks";

import "./TodoList.css";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletedPressed,
  onDisplayAlertClicked,
}) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        key={todo.text}
        todo={todo}
        onRemovePressed={onRemovePressed}
        // onCompletedPressed={onDisplayAlertClicked}
        onCompletedPressed={onCompletedPressed}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(completeTodo(text)),
  onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
